(function(){
	// jsmart扩展
	(function(){
		
		
	})() ;
})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){

	var personal_message_tpl = new jSmart(document.getElementById('personal_message_tpl').innerHTML);

	// 页面渲染
	(function(){
		check_login_module() ;

		jsmartRegister() ;

		var curr_user_info = RP.store.getItem('curr_user_info') ;  
		console.info(curr_user_info) ;
		var data = {
			user:curr_user_info
		} ;
		var res = personal_message_tpl.fetch(data) ;
		$('#wrap1').html(res) ;

		
	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		// 编辑
		$('#wrap1').on('click','#person_edit',function(){
			window.location.href = "person_edit.php" ;
		}) ;
		$('#wrap1').on('click','#phone_go_edit',function(){
			window.location.href = "phone_edit.php" ;
		}) ;
		$('#wrap1').on('click','#pass_go_edit',function(){
			window.location.href = "password_edit.php" ;
		}) ;
	})() ;


	function jsmartRegister(){
		jSmart.prototype.registerPlugin("modifier","getRealName",function(name){
			name = '' + name ;
			if(name.indexOf('*****')==3){
				return '' ;
			}
			return name ;
		});
	}
	







}) ;