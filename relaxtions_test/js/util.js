// 数据类操作
var store = {
	// 本地数据保存key值
	key:{
		users:'userlist_storage',
		resources:'resource_storage',
		currUsers:'currUser_session_storage'
	},
	// 初始化数据
	_init: function(){
		var self = this,
			usersKey = self.key.users,
			resourcesKey = self.key.resources;
		// 初始化用户
		if(!storageUtil.get(usersKey)){
			storageUtil.set(usersKey,initData.user);
		}
		// console.log(storageUtil.get(usersKey));

		if(!storageUtil.get(resourcesKey)){
			storageUtil.set(resourcesKey,initData.resources);
		}
	},
	// 添加用户(用户登录时添加，还要保存到session信息)
	adduser:function(user){
		if(!user){
			return;
		}
		var self=this,
			usersKey = self.key.users,
			currUsersKey=self.key.currUsers,
			// 当前已保存的数据			
			userList = storageUtil.get(usersKey) || [];
		userList.push(user);
		storageUtil.set(usersKey,userList);
		// 保存当前用户信息
		storageUtil.set(currUsersKey,user,"session");
		return storageUtil.get(usersKey);
	},
}
store._init();
// 配置模拟数据
// Mock.mock('http://g.cn',{
// 	'id|+1':4,
// 	'name':'@name',
// 	'image':'@image',
// 	'county':'@county(true)',
// 	'email':'@email'
// });
// function checkPhone(phone){
// 	var ret = {
// 		hasUsed : false,
// 	};
// 	for(var i = 0 ; i < initData.user.length-1 ; i++){
// 		var currPhone = initData.user[i].phone ;
// 		if(currPhone == phone){
// 			ret.hasUsed = true ;
// 			this.checkpass=function (password1){
// 				// 判断密码是否存在
// 				if(!password1){
// 					alert("密码不能为空");
// 					return;
// 				}
// 				// 判断密码格式是否正确
// 				var password=/^[0-9|a-zA-Z]{6,20}$/;//前后的标志要加
// 				var result2=password.test(password1);
// 				console.log(initData.user[i].password)
// 				if(!result2){
// 					alert("请设置6-20位的密码");
// 					return;
// 				}

// 				if(password1!=initData.user[i].password) {
// 					alert("请输入正确的密码");
// 					return;	
// 				}
// 				window.location.href="./index.html";	
// 				}
			
// 			break ;
// 		}
// 	}	
// 	return ret.hasUsed ;
// }
// var f3=new checkPhone();
// f3.checkpass();
	function checkPhone(phone){
		if(!phone){
			alert("手机号不能为空");
			return false;
		}
		var phonenum=/^1\d{10}$/;
		var result=phonenum.test(phone);
		if(!result){
			alert("请输入正确的手机号");
			return false;
		}
		return true;
	}
	function checkidencode(identifycode){
		if(!identifycode){
			alert("验证码不能为空");
			return false;
		}
		var idencode=/^\d{6}$/;
		var result=idencode.test(identifycode);
		if(!result){
			alert("请输入6位验证码");
			return false;
		}
		return true;
	}
	function checkpassword(password){
		if(!password){
			alert("密码不能为空");
			return false;
		}
		// 判断密码格式是否正确
		var password1=/^[0-9|a-zA-Z]{6,20}$/;//前后的标志要加
		var result2=password1.test(password);
		if(!result2){
			alert("请设置6-20位的密码");
			return false;
		}
		return true;
	}
	function confirmPass(password1,password2){
		if(password1!=password2){
			alert("确认密码和密码不一致");
			return false;
		}
		return true;
	}