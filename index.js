function validate(){
    let username=document.getElementById('username').value ;
    let password1=document.getElementById('password1').value ;
    // let password2=document.getElementById('password2').value ;
    let mobilenumber=document.getElementById('mobilenumber').value ;
    let emailaddress=document.getElementById('emailaddress').value ;

    if(username==null || username==""){
        document.getElementById('uname').innerHTML="*Please fill the username feild";
        return false;
    }
    // else{
    //     document.getElementById('uname').innerHTML="";
    //     return false;
    // }
    if((username.length<=2) || (username.length>=30)){
        document.getElementById('uname').innerHTML="*username length must be between 3 to 30";
        return false;
    }  
    if(!isNaN(username)){
        document.getElementById('uname').innerHTML="*only character is allowed";
        return false;
    }
    if(password1==null || password1==""){
        document.getElementById('pass1').innerHTML="*Please fill the password feild";
        return false;
    }
    if((password1.length<=4) || (password1.length>=15)){
        document.getElementById('pass1').innerHTML="*password length must be between 4 to 15";
        return false;
    }
    // if(password1!=password2){
    //     document.getElementById('pass2').innerHTML="*Please enter password again";
    //     return false;
    // }
    // if(password2==null || password2==""){
    //     document.getElementById('pass2').innerHTML="*Please fill the Confirm password feild";
    //     return false;
    // }
    if(mobilenumber==null || mobilenumber==""){
        document.getElementById('mobileno').innerHTML="*Please fill the mobile number feild";
        return false;
    }
    if(mobilenumber.length!=10){
        document.getElementById('mobileno').innerHTML="*Number lenght must be 10";
        return false;
    }
    if(isNaN(mobilenumber)){
        document.getElementById('mobileno').innerHTML="*Only number is allowed";
        return false;
    }
    if(emailaddress==null || emailaddress==""){
        document.getElementById('email').innerHTML="*Please fill the email feild";
        return false;
    }
    if(emailaddress.indexOf('@') <=0 ){
        document.getElementById('email').innerHTML="*Invalid position of @";
        return false;
    }
    return true;
}