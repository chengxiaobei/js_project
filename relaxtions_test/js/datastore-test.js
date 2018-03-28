// 初始化数据
var initData={
	// 用户信息
	user: [
		{
			id:1,
			phone:'15822088294',
			name:'程小贝',
			password:'123456',
			image:'../image/1.jpg',
			county:'河北省邯郸市',
			email:'858674415@qq.com'
		},
		{
			id:2,
			phone:'15822088293',
			name:'程大贝',
			password:'1234567',
			image:'../image/2.jpg',
			county:'河北省石家庄市',
			email:'858674416@qq.com'
		},
		{
			id:3,
			phone:'15822088295',
			name:'程老贝',
			password:'12345678',
			image:'../image/3.jpg',
			county:'河北省保定市',
			email:'858674417@qq.com'
		}
	],
	// 资源
	resources:{
		// 电影
		movie:[
			{
				id:1,
				name:'金刚：“骷髅岛”',
				director:'乔丹·沃格特-罗伯茨',
				role:'麦克思·鲍伦斯坦/约翰·盖汀斯',
				type:'动作/奇幻/冒险',
				laocal:'美国',
				totaltime:'150分钟',
				showtime:'2017-03-24',
				brief:'上世纪70年代，一支集结了科考队员、探险家、战地摄影记者、军人的探险队，冒险前往南太平洋上的神秘岛屿——骷髅岛。他们的到来惊扰了岛上之神——史上最大金刚。经过一番惨烈的激战之后，探险队员散落在了岛屿各处。此时，队员们才意识到这次探险并不是一次单纯的科考任务，而是去探索怪兽存在的证明。',
				doubianid:'tt3731562',
				link:'../resources/movie/dog.avi',
				poster:'https://movie.douban.com/photos/photo/2447406310/#title-anchor'
			},
			{
				id:2,
				name:'八万里',
				director:'柯克',
				role:'赵宁宇/德姬/苟晓娟',
				type:'剧情/动作',
				laocal:'中国大陆',
				totaltime:'91分钟',
				showtime:'2017-03-30',
				brief:'根据藏族奥林匹克第一人切阳什姐的事迹创作。讲述了一位身心受挫的汉族教练重拾自我，带领并培养藏族姑娘实现奥林匹克奖牌梦想的故事。 ',
				doubianid:'tt3731562',
				link:'../resources/movie/dog.avi',
				poster:'https://movie.douban.com/photos/photo/2447406310/#title-anchor'
			},
			{
				id:3,
				name:'斯隆女士',
				director:'约翰·麦登',
				role:'杰西卡·查斯坦/古古·姆巴塔-劳/约翰·利特高',
				type:'剧情/惊悚',
				laocal:'美国/法国',
				totaltime:'132分钟',
				showtime:'2016-12-09',
				brief:'在华盛顿呼风唤雨的政治说客斯隆女士，在美国枪击事件接连发生的情况下，不惜牺牲自己的职业生涯，以督促政府实施更严格的联邦法律规范枪支。  ',
				doubianid:'tt4540710',
				link:'../resources/movie/dog.avi',
				poster:'https://movie.douban.com/photos/photo/2447406310/#title-anchor'
			}
		],
		music:[
			{
				id:1,
				name:'一次就好',
				player:'杨宗纬',
				album:'一次就好',
				type:'热门'
			},
			{
				id:2,
				name:'稻香',
				player:'周杰伦',
				album:'魔杰座',
				type:'最新'
			},
			{
				id:3,
				name:'小苹果',
				player:'筷子兄弟',
				album:'小苹果',
				type:'经典'
			},
			{
				id:4,
				name:'我好想你',
				player:'苏打绿',
				album:'我好想你',
				type:'网络'
			}
		],
		book:[
			{
				id:1,
				name:'完美世界',
				author:'程小贝',
				brief:'完美世界简介完美世界简介完美世界简介完美世界简介完美世界简介完美世界简介完美世界简介完美世界简介',
				type:'言情',
				poster:'../image/3.png'

			},
			{
				id:2,
				name:'我是大明星',
				author:'程大贝',
				brief:'我是大明星简介我是大明星简介我是大明星简介我是大明星简介我是大明星简介我是大明星简介',
				type:'都市',
				poster:'../image/4.png'

			},
			{
				id:3,
				name:'斗破苍穹',
				author:'暴向东',
				brief:'斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介斗破苍穹简介',
				type:'玄幻',
				poster:'../image/5.png'

			},
			{
				id:4,
				name:'天下',
				author:'狍儿',
				brief:'天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介天下简介',
				type:'历史',
				poster:'../image/6.png'

			},
			{
				id:5,
				name:'特种兵在都市',
				author:'小狍儿',
				brief:'特种兵在都市简介特种兵在都市简介特种兵在都市简介特种兵在都市简介特种兵在都市简介特种兵在都市简介特种兵在都市简介',
				type:'热血',
				poster:'../image/7.png'

			}
		]

	}
}
// 本地浏览器缓存
var storageUtil = {
	// type：local(储存为localstorage)、session(储存为sessionstorage)
	set : function(key,data,type){
		// key或data为空时，返回
		if(!key||!data){
			return;
		}
		// 如果数据为对象，则转化为字符串(因为storage只能储存字符串)
		if(typeof data == "object"){
			data=JSON.stringify(data);
		}
		// 如果type为空或type为local
		if(!type||type == "local"){
			localStorage.setItem(key,data);
		}else{
			sessionStorage.setItem(key,data);
		}
	},
	get:function(key,type){
		// key为空时，返回
		if(!key){
			return;
		}
		var data;
		if(!type||type == "local"){
			data = localStorage.getItem(key);
		}else{
			data = sessionStorage.getItem(key);
		}
		// 转为对象返回
		data=JSON.parse(data);
		return data;
	}, 
	remove:function(key,type){
		if(!key){
			return;
		}
		if(!type||type == "local"){
			localStorage.removeItem(key);
		}else{
			sessionStorage.removeItem(key);
		}

	}
}