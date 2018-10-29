jQuery(function($) {
//1.top部分的hover效果（函数来自于COM_head.js）
hovers();

	//2.nav下面的轮播图-  大图
	$('.banner').wdcarousel({
		ele: '.banner',
		width: 1920,
		height: 500,
		type: 'fade',
		pageNum: true,
		seamless: false,
		button: false,
		duration: 3000,
		imgs: [
			"img/banner1.jpg",
			"img/banner2.jpg",
			"img/banner3.jpg",
			"img/banner4.jpg",
			"img/banner5.jpg",
			"img/banner6.jpg",
			"img/banner7.jpg",
			"img/banner8.jpg",
			"img/banner9.jpg",
			"img/banner10.png",
			"img/banner11.png",
			"img/banner12.png"
		]
	});
	//2.nav下面的轮播图-  大图END

	//3.nav下面的轮播图-  小图 1
	$('.smallHot_t').wdcarousel({
		ele: '.smallHot_t',
		width: 250,
		height: 245,
		type: 'fade',
		page: false,
		seamless: false,
		button: false,

		duration: 3000,
		imgs: [
			"img/banner-min1.png",
			"img/banner-min2.png",
			"img/banner-min3.png",
			"img/banner-min4.png",
			"img/banner-min5.png",
			"img/banner-min6.png",
			"img/banner-min7.png",
			"img/banner-min8.png",
			"img/banner-min9.png",
			"img/banner-min10.png",
			"img/banner-min11.png",
			"img/banner-min12.png"

		]
	});

	//4.nav下面的轮播图-  小图 2
	$('.smallHot_b').wdcarousel({
		ele: '.smallHot_b',
		width: 250,
		height: 245,
		type: 'fade',
		page: false,
		seamless: false,
		button: false,
		duration: 3000,
		imgs: [
			"img/banner-min13.png",
			"img/banner-min14.png",
			"img/banner-min15.png",
			"img/banner-min16.png",
			"img/banner-min17.png",
			"img/banner-min18.png",
			"img/banner-min19.png",
			"img/banner-min20.png",
			"img/banner-min21.png",
			"img/banner-min22.png",
			"img/banner-min23.png",
			"img/banner-min24.png"
		]
	});

	//5主播推荐 右边的轮播图
	$('.intro_banner').wdcarousel({
		ele: '.intro_banner',
		width: 418,
		height: 418,
		type: 'fade',
		pageNum: true,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"https://cdnimg.ocj.com.cn/item_images/item/15/12/6536/15126536-L.jpg",
			"https://cdnimg.ocj.com.cn/item_images/item/15/24/4812/15244812-L.jpg",
			"https://cdnimg.ocj.com.cn/item_images/item/15/24/5828/15245828L.jpg",
			"https://cdnimg.ocj.com.cn/item_images/item/15/22/2649/15222649-L.jpg",
			"https://cdnimg.ocj.com.cn/item_images/item/15/23/9407/15239407-L.jpg",
		]
	});
	//5主播推荐 右边的轮播图END 

	//6全球购 右边的轮播图
	$('.Metao_banner').wdcarousel({
		ele: '.Metao_banner',
		width: 398,
		height: 278,
		type: 'fade',
		pageNum: true,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180817172147_14.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180817172147_14.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11543/13621/2_20180821131406_31.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180810094711_8.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180719160030_10.jpg"

		]
	});

	//6全球购 右边的轮播图END 

	//7主要 中央部分轮播图
	$('.centers_banner').wdcarousel({
		ele: '.centers_banner',
		width: 1190,
		height: 130,
		type: 'fade',
		page: false, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [

			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11543/13621/2_20180821131406_31.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11543/13621/5_20180511132644_50.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11543/13621/2_20180821131406_31.jpg",
		]
	});

	//7主要 中央部分轮播图END

	//8食品饮料轮播图
	$('.food_drink_banner').wdcarousel({
		ele: '.food_drink_banner',
		width: 290,
		height: 350,
		type: 'fade',
		page: true, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [

			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170630133153_95.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170520094949_61.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170520095015_94.jpg",
		]
	});

	//8食品饮料轮播图END
	//9.家居厨房 轮播图

	$('.home_kitchen_banner').wdcarousel({
		ele: '.home_kitchen_banner',
		width: 290,
		height: 350,
		type: 'fade',
		page: true, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20170616164648_26.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20161021141539_73.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20161010103926_16.jpg",

		]
	});

	//9.家居厨房 轮播图END

	//10.3C家电  轮播图

	$('.appliance_banner').wdcarousel({
		ele: '.appliance_banner',
		width: 290,
		height: 350,
		type: 'fade',
		page: true, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180815105840_80.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150011_10.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180613150107_8.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg"

		]
	});

	//10.3C家电  轮播图END

	//11.时尚服饰  轮播图

	$('.fashion_banner').wdcarousel({
		ele: '.fashion_banner',
		width: 290,
		height: 350,
		type: 'fade',
		page: true, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20180104183153_83.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170331204511_36.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170331204418_86.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170204153101_89.jpg"

		]
	});

	//11.时尚服饰  轮播图END

	//12底部 会员特权 轮播图

	$('.prerogative_banner').wdcarousel({
		ele: '.prerogative_banner',
		width: 427,
		height: 210,
		type: 'fade',
		page: true, //是否显示分页
		pageNum: false,
		seamless: false,
		button: true, //左右按钮
		duration: 3000,
		imgs: [
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9934/11255/1_20171019142354_55.jpg",
			"http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9934/11255/1_20171019142441_49.jpg"

		]
	});

	//12底部 会员特权 轮播图END
	
	
	//6.返回顶部动画
	(function() {

		let fixation = document.querySelector('.fixation');
		var left1 = document.querySelector('.top .container').offsetLeft;
		var left2 = document.querySelector('.container').offsetWidth;
		//给定位
		fixation.style.left = left1 + left2 + 20 + 'px';
		let toTop = document.querySelector('.toTop');
		var cc = toTop.nextElementSibling

		// 点击返回顶部
		toTop.onclick = () => {
			let timer = setInterval(() => {
				// 计算缓冲速度
				let speed = Math.ceil(window.scrollY / 5); //1

				scrollBy(0, -speed);

				if(window.scrollY <= 0) {
					clearInterval(timer);
				}

			}, 30)
		}
	})()
	//6.返回顶部动画END

});