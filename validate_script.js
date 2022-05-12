function validateform(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be 6 char long");
        return false;
    }
}