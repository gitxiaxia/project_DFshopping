//利用jquery复制头部和尾部html代码
jQuery(function($) {
	/*清单
	 1. 生成head_box部分  
	 2..生成footer_box部分
	 3.登录from表单 左边轮播图
	 4.登陆验证
	 */

	//1.生成head_box部分                hover效果【函数来自】com_head.js
	$('#head_box').load('com_head_box.html', function() {

		hovers();
	});
	//2.生成footer_box部分
	$('#footer_box').load('com_footer_box.html');

	//3.登录from表单 左边轮播图-  

	$('.main_banner').wdcarousel({
		ele: '.main_banner',
		width: 450,
		height: 355,
		type: 'fade',
		pageNum: true,
		seamless: false,
		button: false,
		duration: 3000,
		imgs: [
			"https://www.ocj.com.cn/image_site/shop/conts/421/761/1241/1441/1_20180820175944_4.jpg",
			"https://www.ocj.com.cn/image_site/shop/conts/421/761/1241/1441/1_20180731170947_15.jpg",
			"https://www.ocj.com.cn/image_site/shop/conts/421/761/1241/1441/1_20180704150846_87.jpg",

		]
	});

	//3.登录from表单 左边轮播图-  END

	//4.登陆验证
	function login() {
		//页面刷新  跟新随机验证码  && 自动填写用户名
		window.onload = function() {
			//自动更新随机验证码
			$('.Random_code').html(randomNumber(1000, 9999)).css({
				color: randomColor(16)
			})
			//自动填写用户名
			// * 获取cookie
			// * 判断有效性
			var currentUser;
			var currentPassword
			var cookies = document.cookie;
			cookies = cookies.split('; ');

			// 循环找出想要的cookie
			cookies.forEach(function(item) {
				// 拆分name,value
				var arr = item.split('=');

				if(arr[0] === 'username') {
					$('.username').val(arr[1])
				}
			});

		}
		//事件 失去焦点时去除高亮
		$(".password,.username,.valcode").blur(function() {
			
			$(this).css({
				borderColor: '#ccc',
				boxShadow: 'none'
			});
		})

		//高亮
		$(".password,.username,.valcode").focus(function() {
			$(this).css({
				borderColor: '#239cdc',
				boxShadow: '0 0 6px #A6E0FF'
			});
		});
		//全局变量
		var _checkbox = document.querySelector('#checkbox');

		//事件委托
		$(".form").on('click', ['.change', '.delete', '.submit'], function(e) {
			var target = e.target;
			//清空输入框内容
			if(target.className == 'delete') {

				var input_val = target.previousElementSibling;
				input_val.value = "";
			}
			//生成随机验证码
			if(target.className == 'change') {
				var random_code = target.previousElementSibling
				random_code.innerHTML = randomNumber(1000, 9999);
				random_code.style.color = randomColor(16);

			}

			//点击提交
			if(target.className == 'submit') {
				//记住登录名

				if($('.username').val() == "") {

					$('.user_tips').html('用户名不能为空');

					return false;

				}
				if($('.password').val() == "") {

					$('.pwd_tips').html('密码不能为空');

					return false;

				}
				if($('.valcode').val() == "") {

					$('.verifyCode_tips').html('验证码不能为空');

					return false;

				}

				if($('.valcode').val() != $('.Random_code').html()) {
					$('.verifyCode_tips').html('您输入的验证吗不正确');

					return false;
				}
				//选中记住用户名
				if(_checkbox.checked) {
					// 得到当前时间
					var date = new Date();

					// 在当前的基础上+30天
					date.setDate(date.getDate() + 30);

					document.cookie = 'username=' + $('.username').val() + ';expires=' + date.toUTCString();

				}

				//发送请求
				$.ajax({
					type: 'post',
					url: 'http://localhost:1010/src/api/login.php',
					data: {
						username: $('.username').val(),
						password: $('.password').val()
					},
					success(res) {

						if(res === 'no') {
							alert("用户名和密码不正确")
							isok = false;

						} else if(res === 'yes') {

							location.href = '../index.html';
							isok = true;

						}

					}

				});

			}

		})

		///////////////////////////////////////////////////////////////////////////
	}
	login();

	//4.登录验证END 

});