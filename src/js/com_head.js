
	//1.头部a标签hover
	function hovers() {
		

		/*我的购物车*/
		var my = document.querySelector('.my');
		var ul = document.querySelector('.top_mask_ul');

		//鼠标移到元素  我的购物
		my.onmouseover = () => {
			ul.style.display = 'block';
		}
		//鼠标移开时 我的购物
		my.onmouseout = () => {
			ul.style.display = 'none'
		}

		/*微信*/
		var weixin = document.querySelector('.weixin');
		var img = document.querySelector('.top_mask_img');

		//鼠标移到元素  微信
		weixin.onmouseover = () => {
			img.style.display = 'block';

		}
		//鼠标移开时 微信
		weixin.onmouseout = () => {
			img.style.display = 'none';

		}

		/*搜索框旁边购物车*/
		var car = document.querySelector('.car');
		var car_show = document.querySelector('.car_show');

		car.onmouseover = () => {
			car_show.style.display = 'block';
		}
		car.onmouseout = () => {
			car_show.style.display = 'none';

		}

	}
	