function profileStructureOld(user){
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
                            '<img class="profile-img" src="'+user.profilePictureURL+'" alt="Profile Picture" />'+
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
}


function profileStructure(user){
    return(
        `
        <div class="profile-container">
            <div class="profile-box">
                <div class="row">
                    <h2 class="">Hello, ${user.userName}</h2> 
                </div>
                <div class="row">
                    <p id="">Gamer Tag: ${user.gamerTag}</p> 
                </div>
                <div class="row">
                    <p class="">Email: ${user.email}</p> 
                </div>
                <div class="row">
                    <div class="image-container">
                        <img class="profile-img" src="${user.profilePictureURL}" alt="Profile Picture" />
                    </div>
                </div>
                <div class="row">
                    <p class="">Playing since: ${user.creationDate}</p> 
                </div>
                <div class="row">
                    <p class="">Enemies defeated: ${user.enemiesDefeated}</p> 
                </div>
            </div>
        </div>
        `
    );
}