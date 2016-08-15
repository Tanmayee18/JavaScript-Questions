/**
 * Created by Tanmayee on 8/13/2016.
 */
function validateForm() {
    var name = document.getElementsByName("username");
    var pwd = document.getElementsByName("password");
    var uNum = document.getElementsByName("usernumber");
    if(uNum.isInteger()){
        alert("Registered");
        setTimeout(function() {window.location = "http://www.cpanel.com/" });
        return true;
    }
    else{
        alert("Usernumber is numeric only");
        return false;
    }
}
