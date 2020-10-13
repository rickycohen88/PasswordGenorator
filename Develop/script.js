// Assignment Code
var lowercase = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","^","&","*"];
var usedarr = [];

var generateBtn = document.querySelector("#generate");// sets a variable to html button


var passwordrtn;

// get user criteria for password
var length = document.querySelector("#length");
//var chklow = document.getElementById("chklow").checked;
if( document.getElementById("chkupp").checked){
  usedarr.push(uppercase);
}
if( document.getElementById("chklow").checked){
  usedarr.push(lowercase);
}
if( document.getElementById("chkspec").checked){
  usedarr.push(special);
}
if( document.getElementById("chknum").checked){
  usedarr.push(numbers);
}






let order = Math.random;

if (order > 0.4999999){
  lowercase.reverse();
  uppercase.reverse();
  numbers.reverse();
  special.reverse();
  console.log ("arrays were reversed");
}

else {
  console.log("arrays are normal");

}

for( let i=0; i < length;i++){


}
function createkey (){

}



// Write password to the #password input
// original content
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//runs function when click is present on variable generatebtn
