<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

//养殖社区
class Culture_community extends CI_Controller {
    public function __construct(){
    	parent::__construct() ;
    	$this->load->model("CultureCommunitymodel","CCM") ;
    }

    public function getPhoto(){

    	$ret=$this->CCM->getPhoto() ;
    	echo $ret ;
    }
	
	public function getStatus(){

		$ret=$this->CCM->getStatus() ;
		echo $ret ;
	}

    public function getZan(){
        $ret=$this->CCM->getZan() ;
        echo $ret ;
    }

    public function getPageStatus(){
        $ret=$this->CCM->getPageStatus() ;
        echo $ret ;
    }

    public function getDetailStatus(){
        $ret=$this->CCM->getDetailStatus() ;
        echo $ret ;
    }

    public function getComment(){
        $ret=$this->CCM->getComment() ;
        echo $ret ;
    }

    public function getAnswerComment(){
        $ret=$this->CCM->getAnswerComment() ;
        echo $ret ;
    }

    public function sendDynamicsStatus(){
        $ret=$this->CCM->sendDynamicsStatus() ;
        echo $ret ;
    }

    public function sendDynamicsStatusNew(){
        $ret=$this->CCM->sendDynamicsStatusNew() ;
        echo $ret ;
    }

    public function getNewsTip(){
        $ret=$this->CCM->getNewsTip() ;
        echo $ret ;
    }

    public function getDetailNews(){
        $ret=$this->CCM->getDetailNews() ;
        echo $ret ;
    }

    public function sendAccusation(){
        $ret=$this->CCM->sendAccusation() ;
        echo $ret ;
    }

    public function detachPhoto(){
        $ret=$this->CCM->detachPhoto() ;
        echo $ret ;
    }

    public function deleteStatus(){
        $ret=$this->CCM->deleteStatus() ;
        echo $ret ;
    }

    public function getImageData(){
        $ret = $this->CCM->getImageData() ;
        echo $ret ;
    }

    public function updateNotice(){
        $ret = $this->CCM->updateNotice() ;
        echo $ret ;
    }
  
    public function getCommunityBg(){
        $ret = $this->CCM->getCommunityBg() ;
        echo $ret ;
    }
}
?>