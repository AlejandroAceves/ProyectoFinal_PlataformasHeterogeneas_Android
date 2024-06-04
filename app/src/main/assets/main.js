$(document).ready(function () {
    deactivateLogin();
    var uId = -1;
    
    $("#btnRegister").click(function () {
        drawer(registrationForm);
        $("#btnSubmitReg").click(function () {
            if(isValidEmail($("#emailTxt").val())){
                registerUser(function(id) {
                    if (id !== null) {
                        uId = id;
                    } else {
                        console.log("Register failed.");
                    }
                });
            }
            else{
                alert("Invalid email");
            }
        });
    });
    $("#btnLogin").click(function () {
        drawer(loginForm);
        $("#btnSubmitLog").click(function () {
            logUser(function(id) {
                if (id !== null) {
                    uId = id;
                } else {
                    console.log("Login failed.");
                }
            });
        });
    });
    $("#btnLogout").click(function () {
        deactivateLogin();
        uId = -1
    });
});