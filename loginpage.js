 function validateLogin() {
        var Name = document.getElementById("s_username");
        var password = document.getElementById("s_password").value;
        var getUsername = document.getElementById("s_username").value;
        // var nameerror= document.getElementById("nameerror");
        // console.log(getUsername);
        // var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
        // console.log(getUsername);
        // var c=getUsername.length;
        // console.log(c);
        if (Name.value != "" && password.length >=8){
            localStorage.setItem("userName", getUsername);
            window.location.href = "./prdouct.html";
        } else {
             alert("Please enter 8 chracter length");
            // nameerror.innerHTML="please enter the valid data";
            // return false;
        }
    }
    
