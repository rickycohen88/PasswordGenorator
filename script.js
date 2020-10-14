var generateBtn = document.querySelector("#generate");// sets a variable to html button
generateBtn.addEventListener("click", trigger);//runs function when click is present on variable generatebtn




// Assignment Code

var confirmready = false; 
var passlength = 0;
var passwordrtn;

function trigger(){
  //usedarr.length = 0; //usedarr=[]
  console.log("used arr has ben set to zero");
  console.log(usedarr);
  testobject.definepassword();
}
 // get user criteria for password and push to array to be used for creating password
 //function is called onclick of generate password btn on html page
 


    
 function definepassword () {
  
  document.getElementById("notifications").innerHTML=undefined;
    
    let passlength = document.getElementById("lengthinput").value;
    console.log(passlength);
    
    if (passlength > 128 || passlength < 8){
      document.getElementById("notifications").innerHTML ="please specify the length of the password.";
      console.log("sent length error to text feild");
      console.log(passlength);
    }
   }   
   
   function areweconfirmready (){
console.log(confirmready);
if (confirmready === true){
  var sendconfirm = confirm("you have selected a password of "+passlength+ " and containing"+ usedarr);
  if(sendconfirm === true){
    this.makepasword();
  }
  else{
    document.getElementById("notifications").innerHTML = "you have cancelled making the password";
  }
}
else{
  
}


}
  function makepasword (){
   let lowercase = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];
   let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   let numbers = ["0","1","2","3","4","5","6","7","8","9"];
   let special = ["!","@","#","$","%","^","&","*"," ",];//need more!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   let usedarr = [];

  for( let i=0; i < passlength; i++){
    let order = Math.random();

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
      console.log(usedarr);
       passwordrtn += usedarr[Math.ceil(Math.random())][Math.ceil(Math.random())];
       console.log(passwordrtn);
  }

}


    
     /* switch(true){
        case document.getElementById("chkupp").checked && document.getElementById("chklow").checked && document.getElementById("chkspec").checked && document.getElementById("chknum").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(special);
          console.log("added special");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chklow").checked && document.getElementById("chkspec").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(special);
          console.log("added special");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chklow").checked && document.getElementById("chknum").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chkspec").checked && document.getElementById("chknum").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(special);
          console.log("added special");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chklow").checked && document.getElementById("chkspec").checked && document.getElementById("chknum").checked:
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(special);
          console.log("added special");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chklow").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(lowercase);
          console.log("added lower");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chkspec").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(special);
          console.log("added special");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked && document.getElementById("chknum").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chklow").checked && document.getElementById("chkspec").checked:
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(special);
          console.log("added special");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chklow").checked && document.getElementById("chknum").checked:
          usedarr.push(lowercase);
          console.log("added lower");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkspec").checked && document.getElementById("chknum").checked:
          userarr.push(special);
          console.log("added special");
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkupp").checked:
          usedarr.push(uppercase);
          console.log("added upper");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chklow").checked:
          usedarr.push(lowercase);
          console.log("added lower");
          console.log(usedarr);
          confirmready = true;
          break;
        case document.getElementById("chkspec").checked:
          usedarr.push(special);
          console.log("added special");
          console.log(usedarr);
          confirmready = true;

          break;
        case document.getElementById("chknum").checked:
          usedarr.push(numbers);
          console.log("added numbers");
          console.log(usedarr);
          confirmready = true;
          this.areweconfirmready();
          break;

        default:
        document.getElementById("notifications").innerHTML = document.getElementById("notifications").innerHTML +" please check the characters you wish to use.";
        console.log("sent message to notification feild need characters input.");
    }
  }*/

 




// Write password to the #password input
// original content

    /*var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;*/







// Add event listener to generate button
