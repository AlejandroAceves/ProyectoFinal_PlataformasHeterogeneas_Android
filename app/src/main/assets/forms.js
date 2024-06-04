const completeForm = (
        "<br>"+
        "<br>"+
        "<table class='tableForm'>"+
            "<tr>"+
                "<td><label for='usarNameTxt'>User name</label></td>"+
                "<td><input type='text' id='userNameTxt' required></td>"+
            "</tr>"+
            "<tr>"+
                "<td><label for='gamerTagTxt'>Gamer Tag</label></td>"+
                "<td><input type='text' id='gamerTagTxt' required></td>"+
            "</tr>"+
            "<tr>"+
                "<td><label for='profilePictureURLTxt'>Profile Picture URL</label></td>"+
                "<td><input type='text' id='profilePictureURLTxt' required></td>"+
            "</tr>"+
            "<tr>"+
                "<td><label for='emailTxt'>Email</label></td>"+
                "<td><input type='email' id='emailTxt' required></td>"+
            "</tr>"+
            "<tr>"+
                "<td><label for='passwordTxt'>Password</label></td>"+
                "<td><input type='password' id='passwordTxt' required></td>"+
            "</tr>"+
        "</table>"
);

const registrationForm=(
    completeForm+
    "<br>"+
    "<button id='btnSubmitReg' class='bigButton btnBright'>Register</button>"+
    "<br>"+
    "<br>"
);

const editForm=(
    completeForm+
    "<br>"+
    "<button id='btnSubmitEdit' class='bigButton btnBright'>Edit</button>"+
    "<br>"+
    "<br>"
);


const loginForm = (
    "<br>"+
    "<div class='labelTitle formTitle'>Welcome Back!</div>"+
    "<br>"+
    "<br>"+

    "<table class='tableForm'>"+
    "<tr>"+
        "<td><label for='userNameTxt'>User Name</label></td>"+
        "<td><input type='text' id='userNameTxt' required></td>"+
    "</tr>"+
    "<tr>"+
        "<td><label for='passwordTxt'>Password</label></td>"+
        "<td><input type='password' id='passwordTxt' required></td>"+
    "</tr>"+
    "</table>"+
    "<br>"+
    "<button id='btnSubmitLog' class='bigButton btnBright'>Login</button>"+
    "<br>"
);