//安卓键盘选项卡冲突
			var height = document.documentElement.clientHeight || document.body.clientHeight;
			plus.webview.currentWebview().setStyle({
				height: height
			});
			window.onresize = function() {
				plus.webview.currentWebview().setStyle({
					height: height
				})
			}
