function deleteUser(id){
    $("#wrapper").html('');
    $.ajax({
        method: 'DELETE',
        url: API_BASE_URL+'/user/delete/' + id,
        success: function (user) {
            console.log("data", user);
            alert("User deleted succesfully")
            deactivateLogin();
        },
        error: function(){
            $("#wrapper").html('');
            $("#wrapper").append("<br><br>Something went wrong.");
        }
    });
}