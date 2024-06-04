function profileStructure(user){
    return(
        '<br><br>'+
        '<div class="container">'+
            '<div class="divProfile">'+
                '<table>'+
                    '<tr>'+
                        '<td>'+
                            '<h2>Hello, '+user.userName+'!</h2>'+
                            '<p>Gamer Tag: '+user.gamerTag+'</p>'+
                            '<p>Email: '+user.email+'</p>'+
                            '<img src="'+user.profilePictureURL+'" alt="Profile Picture" />'+
                            '<p>Playing since: '+user.creationDate+'</p>'+
                            '<p>Enemies defeated: '+user.enemiesDefeated+'</p>'+
                        '</td>'+
                    '</tr>'+
                '</table>'+
                '<div class="buttons-container">'+
                    '<table>'+
                        '<tr>'+
                            '<td><button id="btnEdit" class="bigButton btnBright">Update</button></td>'+
                            '<td><button id="btnDelete" class="bigButton btnBright">Delete</button></td>'+
                        '</tr>'+
                    '</table>'+
                '</div>'+
            '</div>'+
        '</div>'
    );
    // return (
    //     "<div class='divProfile'>" +
    //         "<table>" +
    //             "<p>Gamer Tag: "+user.gamerTag+"</p>" +
    //             "<p>Email: "+user.email+"</p>" +
    //             "<img src='" +user.profilePictureURL+ "'/>" +
    //             "<p>Playing since: "+user.creationDate+"</p>" +
    //             "<p>Enemies defeated: "+user.enemiesDefeated+"</p>" +
    //         "</table>" +
    //     "</div>"+
    //     "<div class='wrapper'>" +
    //     "<table>"+
    //         "<tr>"+
    //             "<td><button id='btnEdit' class='bigButton btnDark'>Update</button></td>"+
    //             "<td><button id='btnDelete' class='bigButton btnDark'>Delete</button></td>"+
    //         "</tr>"+
    //     "</table>"+
    //     "</div>"
    // );
}