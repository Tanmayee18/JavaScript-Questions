/**
 * Created by Tanmayee on 8/13/2016.
 */

function validateForm() {
    var name = document.getElementsByName("username");
    var pwd = document.getElementsByName("password");
    var uNum = document.getElementsByName("usernumber");
    if(checkUsername(name)){
        if(checkPassword(pwd)){
            if(checkUsernumber(uNum)){
                alert("Successfully Registered!!!");
                setTimeout(function() {window.location = "http://www.cpanel.com/" });
            }
            else {
                alert("UserNumber has to be a numerical value!!");
            }
        }
        else{
            alert("A password should contain atleast 2 numbers and 8-15 characters in length !");
        }
    }
    else{
       alert("Username should contain atleast 1 uppercase, 1 lowercase, 1 number and should not contain any special characters!!!");
    }
}
function checkUsername(name) {
    var uName = /(=?.*[A-Z])(=?.*[a-z])(=?.*[0-9])/;
    var pattern = name.val.match(uName);
    console.log(pattern);
    if(pattern) {
        console.log("name matches Regex");
        return true;
    }
    else {
        console.log("name does not match the Regex");
        return false;
    }
}
function checkPassword(pwd) {
    //var paswd = /^(?=.*\d)[A-Za-z0-9](?=.*\d).{8,15}$/;
    if(pwd.toString().match(/(?=.*\d)(?=.*\d).{8,15}$/)){
        return true;
    }
    else{
        return false;
    }
}
function checkUsernumber(uNum) {
    //var uNumber = /^[0-9]+$/;
    if(uNum.match(/^[0-9]+$/) && uNum.length == 36){
        return true;
    }
    else{
        return false;
    }
}
function popUp() {
    
}
