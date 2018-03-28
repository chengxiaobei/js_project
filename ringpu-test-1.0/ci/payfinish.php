<?php
if($_REQUEST['orderNum']){
     $orderNum=$_REQUEST['orderNum'] ;
}

if($_REQUEST['result'] == '2000'){
	header('location:../html_php/shopping_store/paysuccess.php?orderNum='.$orderNum.'&random='.time());	
}else if($_REQUEST['result'] == '4031'){
	header('location:../html_php/shopping_store/payfail.php?orderNum='.$orderNum.'&statue=haspay'.'&random='.time());	
}else if($_REQUEST['result'] == '4037'){
	header('location:../html_php/shopping_store/payfail.php?orderNum='.$orderNum.'&statue=offline'.'&random='.time());	
}else if($_REQUEST['result'] == '4036'){
	header('location:../html_php/shopping_store/payfail.php?orderNum='.$orderNum.'&statue=notenough'.'&random='.time());	
}else{
	header('location:../html_php/shopping_store/payfail.php?orderNum='.$orderNum.'&statue=other'.'&random='.time());
}