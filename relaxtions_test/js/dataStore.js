// 数据存储仓库
var initData = {
	// 用户信息
	users: [
		{
			id:1,
			name:'baoxd1',
			password:'1234'
		},
		{
			id:2,
			name:'baoxd1',
			password:'1234'
		},
		{
			id:3,
			name:'baoxd1',
			password:'1234'
		},
		{
			id:4,
			name:'baoxd1',
			password:'1234'
		}
	],
	// 资源
	resources:{
		// 电影
		movie:[
			{
				id:1,
				name:'一条狗的故事',
				type:'喜剧',
				country: '美国',
				director:'斯皮尔伯格',
				performer:'狗、汤姆汉克斯',
				// 电影地址
				link:'../resources/movie/dog.avi',
				// 海报
				poster:'http://e.hiphotos.baidu.com/baike/whfpf%3D180%2C140%2C50/sign=64760ed3b3a1cd1105e32160df2ff9c4/37d12f2eb9389b50d3680ab18c35e5dde6116eba.jpg'
			},
			{
				id:2,
				name:'一条狗的故事2',
				type:'喜剧2',
				country:'美国2',
				director:'斯皮尔伯格2',
				performer:'狗、汤姆汉克斯2',
				// 电影地址
				link:'../resources/movie/dog.avi',
				// 海报
				poster:'http://e.hiphotos.baidu.com/baike/whfpf%3D180%2C140%2C50/sign=64760ed3b3a1cd1105e32160df2ff9c4/37d12f2eb9389b50d3680ab18c35e5dde6116eba.jpg'
			},
			{
				id:3,
				name:'一条狗的故事3',
				type:'喜剧3',
				country:'美国3',
				director:'斯皮尔伯格3',
				performer:'狗、汤姆汉克斯3',
				// 电影地址
				link:'../resources/movie/dog.avi',
				// 海报
				poster:'http://e.hiphotos.baidu.com/baike/whfpf%3D180%2C140%2C50/sign=64760ed3b3a1cd1105e32160df2ff9c4/37d12f2eb9389b50d3680ab18c35e5dde6116eba.jpg'
			},
			{
				id:4,
				name:'一条狗的故事4',
				type:'喜剧4',
				country:'美国4',
				director:'斯皮尔伯格4',
				performer:'狗、汤姆汉克斯4',
				// 电影地址
				link:'../resources/movie/dog.avi',
				// 海报
				poster:'http://e.hiphotos.baidu.com/baike/whfpf%3D180%2C140%2C50/sign=64760ed3b3a1cd1105e32160df2ff9c4/37d12f2eb9389b50d3680ab18c35e5dde6116eba.jpg'
			}
		],
		// 图书
		book:[
			{
				id:1,
				name:'我不是潘金莲',
				author:'刘震云',
				time:'2015-12-12'
			},
			{
				id:2,
				name:'我不是潘金莲',
				author:'刘震云',
				time:'2015-12-12'
			},
			{
				id:3,
				name:'我不是潘金莲',
				author:'刘震云',
				time:'2015-12-12'
			},
			{
				id:4,
				name:'我不是潘金莲',
				author:'刘震云',
				time:'2015-12-12'
			}
		]
	}
};

var storageUtil = {
	// type: local(存储为localStorage) 、session(存储为sessionStorage)
	set: function(key, data, type){
		// key 或 data为空，返回
		if(!key || !data){
			return;
		}
		// 如果data是对象，转为序列化为字符串（因为storage只能存储字符串）
		if(typeof data == 'object'){
			data = JSON.stringify(data);
		}
		// type为空或者type为local
		if(!type || type == 'local'){
			localStorage.setItem(key, data);
		}else{
			sessionStorage.setItem(key, data);
		}
	},
	get: function(key, type){
		if(!key){
			return ;
		}
		var data ;
		if(!type || type == 'local'){
			data = localStorage.getItem(key);
		}else{
			data = sessionStorage.getItem(key);
		}
		// 转为对象返回
		return JSON.parse(data);
	},
	remove: function(key, type){
		if(!type){
			return;
		}
		if(!type || type == 'local'){
			localStorage.removeItem(key);
		}else{
			sessionStorage.removeItem(key);
		}
	}
}

// 数据操作类
var store = {
	// 本地数据保存key值
	key:{
		users:'userlist_storage',
		resources:'resources_storage',
		currUser:'currUser_session_storage'
	},
	// 初始化本地数据
	_init: function(){
		var self = this,
			usersKey = self.key.users,
			resourcesKey = self.key.resources ;

		// 初始化用户
		if(!storageUtil.get(usersKey)){
			storageUtil.set(usersKey, initData.users)
		}

		if(!storageUtil.get(resourcesKey)){
			storageUtil.set(resourcesKey, initData.resources);
		}
	},
	// 添加用户（用户登录时添加，还要保存到session信息）
	addUser: function(user){
		if(!user){
			return;
		}
		var self = this,
			usersKey = self.key.users,
			
			currUserKey = self.key.currUser,
						
			// 当前已保存的数据
			userList = storageUtil.get(usersKey) || [];
		userList.push(user);

		storageUtil.set(usersKey, userList);
		console.log(storageUtil.get(usersKey));
		//保存当前登录用户session信息
		storageUtil.set(currUserKey, user, 'session');
		console.log(storageUtil.get(currUserKey));
	},
	// 添加电影
	addMovie: function(movie){

	}
};

store._init();

// 测试用户登录
// store.addUser({
// 	id:6,
// 	name:'baoxd6',
// 	password:'1234'
// });