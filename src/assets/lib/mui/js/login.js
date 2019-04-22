			(function($, doc) {
				$.init({
					statusBarBackground: '#f7f7f7'
				});
				$.plusReady(function() {
					plus.screen.lockOrientation("portrait-primary");
					var settings = app.getSettings();
					var state = app.getState();
					var mainPage = plus.webview.getWebviewById("main");
					var main_loaded_flag = false;
					if(!mainPage){
						mainPage = $.preload({
							"id": 'main',
							"url": 'main.html'
						});
					}else{
						main_loaded_flag = true;
					}
					
					mainPage.addEventListener("loaded",function () {
						main_loaded_flag = true;
					});
					var toMain = function() {
						//使用定时器的原因：
						//可能执行太快，main页面loaded事件尚未触发就执行自定义事件，此时必然会失败
						var id = setInterval(function () {
							if(main_loaded_flag){
								clearInterval(id);
								$.fire(mainPage, 'show', null);
								mainPage.show("pop-in");
							}
						},20);
					};
					//检查 "登录状态/锁屏状态" 开始
					if (settings.autoLogin && state.token && settings.gestures) {
						$.openWindow({
							url: 'unlock.html',
							id: 'unlock',
							show: {
								aniShow: 'pop-in'
							},
							waiting: {
								autoShow: false
							}
						});
					} else if (settings.autoLogin && state.token) {
						toMain();
					} else {
						app.setState(null);
						//第三方登录
						var authBtns = ['qihoo', 'weixin', 'sinaweibo', 'qq']; //配置业务支持的第三方登录
						var auths = {};
						var oauthArea = doc.querySelector('.oauth-area');
						plus.oauth.getServices(function(services) {
							for (var i in services) {
								var service = services[i];
								auths[service.id] = service;
								if (~authBtns.indexOf(service.id)) {
									var isInstalled = app.isInstalled(service.id);
									var btn = document.createElement('div');
									//如果微信未安装，则为不启用状态
									btn.setAttribute('class', 'oauth-btn' + (!isInstalled && service.id === 'weixin' ? (' disabled') : ''));
									btn.authId = service.id;
									btn.style.backgroundImage = 'url("images/' + service.id + '.png")'
									oauthArea.appendChild(btn);
								}
							}
							$(oauthArea).on('tap', '.oauth-btn', function() {
								if (this.classList.contains('disabled')) {
									plus.nativeUI.toast('您尚未安装微信客户端');
									return;
								}
								var auth = auths[this.authId];
								var waiting = plus.nativeUI.showWaiting();
								auth.login(function() {
									waiting.close();
									plus.nativeUI.toast("登录认证成功");
									auth.getUserInfo(function() {
										plus.nativeUI.toast("获取用户信息成功");
										var name = auth.userInfo.nickname || auth.userInfo.name;
										app.createState(name, function() {
											toMain();
										});
									}, function(e) {
										plus.nativeUI.toast("获取用户信息失败：" + e.message);
									});
								}, function(e) {
									waiting.close();
									plus.nativeUI.toast("登录认证失败：" + e.message);
								});
							});
						}, function(e) {
							oauthArea.style.display = 'none';
							plus.nativeUI.toast("获取登录认证失败：" + e.message);
						});
					}
					// close splash
					setTimeout(function() {
						//关闭 splash
						plus.navigator.closeSplashscreen();
					}, 600);
					//检查 "登录状态/锁屏状态" 结束
					var loginButton = doc.getElementById('login');
					var accountBox = doc.getElementById('account');
					var passwordBox = doc.getElementById('password');
					var autoLoginButton = doc.getElementById("autoLogin");
					var regButton = doc.getElementById('reg');
					var forgetButton = doc.getElementById('forgetPassword');
					loginButton.addEventListener('tap', function(event) {
						var loginInfo = {
							account: accountBox.value,
							password: passwordBox.value
						};
						app.login(loginInfo, function(err) {
							if (err) {
								plus.nativeUI.toast(err);
								return;
							}
							toMain();
						});
					});
					$.enterfocus('#login-form input', function() {
						$.trigger(loginButton, 'tap');
					});
					autoLoginButton.classList[settings.autoLogin ? 'add' : 'remove']('mui-active')
					autoLoginButton.addEventListener('toggle', function(event) {
						setTimeout(function() {
							var isActive = event.detail.isActive;
							settings.autoLogin = isActive;
							app.setSettings(settings);
						}, 50);
					}, false);
					regButton.addEventListener('tap', function(event) {
						$.openWindow({
							url: 'reg.html',
							id: 'reg',
							preload: true,
							show: {
								aniShow: 'pop-in'
							},
							styles: {
								popGesture: 'hide'
							},
							waiting: {
								autoShow: false
							}
						});
					}, false);
					forgetButton.addEventListener('tap', function(event) {
						$.openWindow({
							url: 'forget_password.html',
							id: 'forget_password',
							preload: true,
							show: {
								aniShow: 'pop-in'
							},
							styles: {
								popGesture: 'hide'
							},
							waiting: {
								autoShow: false
							}
						});
					}, false);
					//
					window.addEventListener('resize', function() {
						oauthArea.style.display = document.body.clientHeight > 400 ? 'block' : 'none';
					}, false);
					//
					var backButtonPress = 0;
					$.back = function(event) {
						backButtonPress++;
						if (backButtonPress > 1) {
							plus.runtime.quit();
						} else {
							plus.nativeUI.toast('再按一次退出应用');
						}
						setTimeout(function() {
							backButtonPress = 0;
						}, 1000);
						return false;
					};
				});
			}(mui, document));
