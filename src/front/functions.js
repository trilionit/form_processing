function validate_field(input){
    let name= input.getAttribute("name");
    
    let errorText= input.getAttribute("data-required");
    if(input.getAttribute("type") == 'email' || input.getAttribute("name") == 'email') {
        if(!isEmail(input)){
            showAlert(input, errorText);
            return false;
        }else{
            hideAlert(input);
            return true;
        }
    }else{
        if(input.value.length==0){
            showAlert(input, errorText);
            return false;
        } else{
            hideAlert(input);
            return true;
        }
    }
    
    
}
function capitalize (string){
    if(string.length !=0){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    
}
function isEmail(email){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email.value.trim()).toLowerCase());
}

function showAlert(input, message){
    $(input).css({border:'1px solid rgb(183,28,28)'});
    $("#errorText").html("").append(message);
    $("#highlightError").css({display: 'block'});
    alert(message);
    // $("#errorModal").modal("show");
}
function hideAlert(input){
    $(input).removeAttr('style');
}
function PostFormApi(url, data){
    let req=$.ajax({
        type:"POST",
        url:url,
        data:data,
        dataType: "JSON"
    });
    return req;
}
function GetDataApi(url, data){
    let q=$.ajax({
        type:"GET",
        url,
        data,
        dataType: "JSON"
    });
    return q;
}
