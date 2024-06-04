function registerUser(callback){
    userName = $("#userNameTxt").val();
    gamerTag = $("#gamerTagTxt").val();
    email = $("#emailTxt").val();
    password = $("#passwordTxt").val();
    profilePictureURL = $("#profilePictureURLTxt").val();
    infoUser = {
        "userId": 0,
        "userName": userName,
        "gamerTag": gamerTag,
        "email": email,
        "password": password,
        "profilePictureURL": profilePictureURL,
        "creationDate": new Date(),
        "enemiesDefeated": 0
    }
    
    $.ajax({
        method: 'POST',
        url: API_BASE_URL+"/user/register",
        dataType: 'JSON',
        contentType: 'application/json',
        data: JSON.stringify(infoUser),
        success: function (user) {
            alert("User registered succesfully")
            activateLogin(user);
            callback(user.id);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("<br><br>Something went wrong.");
        }
    });
    return -1;
}
