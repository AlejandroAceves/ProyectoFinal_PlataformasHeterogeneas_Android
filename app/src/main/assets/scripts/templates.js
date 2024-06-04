const completeForm = (
    `<div class="form-container">
    <form action="/action_page.php">
        <div class="row">
            <div class="col-25"><label for="userNameTxt">User name</label></div>
            <div class="col-75"><input type="text" id="userNameTxt" placeholder="John Doe..."></div>
        </div>
        <div class="row">
            <div class="col-25"><label for="gamerTagTxt">Gamertag</label></div>
            <div class="col-75"><input type="text" id="gamerTagTxt" placeholder="CoolBoy2497..."></div>
        </div>
        <div class="row">
            <div class="col-25"><label for="profilePictureURLTxt">Profile Picture</label></div>
            <div class="col-75"><input type="text" id="profilePictureURLTxt" placeholder="https://coolimages.com/..."></div>
        </div>
        <div class="row">
            <div class="col-25"><label for="emailTxt">Email</label></div>
            <div class="col-75"><input type="text" id="emailTxt" placeholder="johndoe@email.com.."></div>
        </div>
        <div class="row">
            <div class="col-25"><label for="passwordTxt">Password</label></div>
            <div class="col-75"><input type="password" id="passwordTxt" placeholder="Password.."></div>
        </div>
    </form>
    </div>`
)

const registrationForm = (
    completeForm +
    "<br>" +
    "<button id='btnSubmitReg' class='bigButton btnBright'>Register</button>" +
    "<br>" +
    "<br>"
);

const editForm = (
    completeForm +
    "<br>" +
    "<button id='btnSubmitEdit' class='bigButton btnBright'>Edit</button>" +
    "<br>" +
    "<br>"
);


const loginForm = (
    `
    <div class="halfsize">
        <div class="form-container">
        <form>
            <div class="row">
            <div class="col-25"><label for="userNameTxt">User Name</label></div>
            <div class="col-75"><input type="text" id="userNameTxt" placeholder=""></div>
            </div>
            <div class="row">
            <div class="col-25"><label for="passwordTxt">Password</label></div>
            <div class="col-75"><input type="password" id="passwordTxt" placeholder=""></div>
            </div>
        </form>
        </div>
        <button id='btnSubmitLog' class='bigButton btnBright'>Login</button>
    </div>
    `
);