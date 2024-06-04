function logUser(callback){
    userName = $("#userNameTxt").val();
    password = $("#passwordTxt").val();
    $("#wrapper").html('');
    $.ajax({
        method: 'GET',
        url: API_BASE_URL+"/user/login?name="+userName+"&password="+password,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (user) {
            console.log("data", user);
            activateLogin(user);
            callback(user.id);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("<br><br>Wrong password or username.");
        }
    });
    return -1;
}

function getUser(id, callback){
    $("#wrapper").html('');
    $.ajax({
        method: 'GET',
        url: "http://localhost:4444/user/find/"+id,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (user) {
            console.log("data", user);
            callback(user);
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("<br><br>Error getting user info.");
        }
    });
    return -1;
}