jQuery(function($) {

	//1.生成head_box部分                hover效果【函数来自】com_head.js
	$('#head_box').load('com_head_box.html', function() {

		hovers();
	});

	//2.生成footer_box部分
	$('#footer_box').load('com_footer_box.html');

	//3.注册验证

		/*
		手机：
		    input值改变时：
		           1.大于11为数字进行截取
		        失去焦点时
		           1.判断手机号码格式是否正确
				           错：提示错误 返回false;
				           对：发送ajax请求
	                    1.返回no:说明已经存在   提示该用户名已经被注册
	                    2.返回yes:说明可以进行下面的操作(验证吗,密码.....) ,并且改变发送验证吗的别境验证、状态改为可发送
	                   
	     
	          密码：
	                点击提交按钮时
	               1.判断格式是否正确
	                                     错：提示错误 返回false;
	               2.密码强度没有做
	
	         确认密码：
	               点击提交按钮时
	               1.判断是否与密码一致 
	                                        错：提示错误，返回false;
*/
	function register() {

		//全局变量 手机号码验证
		var user = /^[1][3,4,5,7,8][0-9]{9}$/;
		var pwd = /^[a-zA-Z0-9]{6,12}$/;
		var isok = false;

		//定时器停止    显示发送验证
		function end() {
			$('.hide').css({
				display: "none",
			})
			$('.get_code').css({
				display: "block",
			})
		}

		//定制器未停止时   隐藏发送验证码
		function no_end() {
			$('.get_code').css({
				display: 'none'
			})

			$('.hide').css({
				display: "block",
			})

		}

		//高亮
		$(".username,.note,.password,.affirm_password").focus(function() {
			$(this).css({
				borderColor: '#239cdc',
				boxShadow: '0 0 6px #A6E0FF'
			});
		});

		//清除高亮
		$(".username,.note,.password,.affirm_password").blur(function(e) {
			var target = e.target;
			//获取元素 用户写入状态
			$(this).css({
				borderColor: '#ccc',
				boxShadow: 'none'
			});

		})

		//手机号码只能11位
		$(".username").bind("input propertychange", function() {

			//号码长度不能大于11 位  否则输入不了
			if($('.username').val().length > 11) {
				var conten = $('.username').val();
				var takeconten = conten.substr(0, 11);
				$('.username').val(takeconten);

			}

		});

		//用户名是否被注册
		$(".username").blur(function() {

			//正则判断

			if(!user.test($('.username').val())) {

				$('.username_reminder').html('请输入正确的11位手机号码')
				isok = false;

			}
			//格式正确
			if($('.username').val().length == 11 && user.test($('.username').val())) {
				//清空提示
				$('.username_reminder').html('')
				end();

				//发送请求
				$.ajax({
					type: 'get',
					url: '../api/username.php',
					data: {
						username: $('.username').val()
					},
					success(res) {
						console.log(res);
						if(res == 'yes') {
							isok = true;
						}
						if(res == 'no') {
							$('.username_reminder').html('此用户名已经注册过了，请换一个试试')
							isok = false;
						}

					}

				})

			}

		})

		//事件委托
		$('.form').on('click', ['.button', '.get_code'], function(e) {

			var target = e.target;
			var className = target.className;

			//设置定时时间

			//点击发送验证码
			if(className == 'get_code') {

				//计时开始
				//这是倒计时长 60秒
				var count_down = 59;
				var timer = setInterval(function() {
					no_end();
					$('.hide').html(+count_down + "秒后重新发送");

					count_down--;
					//计时结束
					if(count_down <= -1) {
						end();
						window.clearInterval(timer);

					}

				}, 1000);

			}

			//点击提交用户名进行注册
			if(className == 'button') {
				/*isok取非  如果为true返回false  */
				/*【注】只要用户名有更改   不管是点击哪一个按钮   判断用户名是否存在 都会执行一次*/
				if(!isok) {
					return false;
				}

				if($('.password').val() == "") {
					$('.password_reminder').html("内容不能为空" || $('.affirm_password').val() == "")
					isok = false;
				}

				/*这边还缺一各短信验证没有写//////////////////////////////////*/
				//密码验证
				if(!pwd.test($('.password').val())) {
					$('.password_reminder').html("6-12位,字母与数字组成");
					isok = false;
				}
				//确认密码验证
				if($('.affirm_password').val() != $('.password').val()) {
					$('.affirm_password_reminder').html("两次输入密码不一致")
					isok = false;
				};
				if($('.affirm_password').val() == $('.password').val()) {
					$('.affirm_password_reminder').html("")
				};
				if(isok) {
					//发送请求
					$.ajax({
						type: 'post',
						url: 'http://localhost:1010/src/api/register.php',
						data: {
							username: $('.username').val(),
							password: $('.password').val()

						},
						success(res) {
							if(res == "succeed") {
								alert($('.username').val() + "注册成功")
							}
							if(res == "defeated") {
								alert("网络问题需要重新注册一次哦")
							}
						}

					});

				}

			}

		})
	}
	register();

})
//3.注册验证END