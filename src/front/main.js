$(document).ready(function(){
    $("#processForm").submit(function(e){
        e.preventDefault();
        console.log("submitted");
        let formField= document.querySelectorAll('.validate-input');
        let dataValues= document.querySelectorAll('.form-input');
    })
	
});