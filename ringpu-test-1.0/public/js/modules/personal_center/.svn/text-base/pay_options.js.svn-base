(function(){

})() ;

require(['jquery', 'global', 'jsmart'],function($,global,_){

	// 页面初始化
	(function(){

	})() ;

	// 业务逻辑
	(function(){
		$('#wrap1').on('click','.backButton',function(){
			window.history.go(-1) ;
		}) ;
		$('#wrap1').on('click','.pay-option',function(){
			if($(this).hasClass('chpay-checked')){
				return false ;
			}
			$('.chpay-checked').addClass('chpay-check').removeClass('chpay-checked') ;
			$(this).addClass('chpay-checked').removeClass('chpay-check') ;
		}) ;

		// 支付
		$('#wrap1').on('click','#order_submit',function(){
			var pay_type = $('.pay-option.chpay-checked').attr('pay-type') ;
			if(!pay_type){
				return false ;
			}
			// 线下支付
			if(pay_type == "4"){
				window.location.href = "outline_pay.php" ;
			}
		}) ;

	})() ;
}) ;