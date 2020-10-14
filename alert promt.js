// Assignment Code
let generateBtn = document.querySelector("#generate");
let selectedarray = [];
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    passlength = 0;
    passlength = prompt("please enter the length of the password it needs to be between 8-128 charcters");
    
            for (i=passlength; passlength >128 ||passlength < 8;){
                passlength = prompt("please enter the length of the password it needs to be between 8-128 charcters");
            }
            alert("you will now be given four '4' seperate promts for characters to be used in the password.[lowercase,Uppercase,Numbers, Special characters] press ok to confim their use or cancel to not use them");
            lowercase = confirm("lowercase :press ok to confirm use, cancel to not use");
            lowercase += selectedarray;
            console.log(selectedarray);
            uppercase = confirm("UPPERCASE :press ok to confirm use, cancel to not use");
            uppercase += selectedarray;
            console.log(selectedarray);
            numz = confirm("numbers(1234) :press ok to confirm use, cancel to not use");
            numz += selectedarray;
            console.log(selectedarray);
            special = confirm("special (!@#$%^&) :press ok to confirm use, cancel to not use");
           
            for (i=[];i = true;i += selectedarrays){

            }

    
}