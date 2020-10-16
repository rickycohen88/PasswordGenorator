var generateBtn = document.querySelector("#generate");// sets a variable to html button
generateBtn.addEventListener("click", definepassword);//runs function when click is present on variable generatebtn
// Assignment Code 
let lowercase = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];
let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let special = ["!","@","#","$","%","^","&","*"," ",];//need more!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let passwordrtn = [];
let arrayofchar =[];
let passlength;
let ensure = [];
 // get user criteria for password and push to array to be used for creating password
 //function is called onclick of generate password btn on html page
function definepassword () {
 passlength = document.getElementById("lengthinput").value;
  console.log(passlength);
    if (passlength > 128 || passlength < 8){
      document.getElementById("notifications").innerHTML ="please specify the length of the password between 8 and 128.";
      console.log("sent length error to text feild");
      
    }
    else if(document.getElementById("chkupp").checked == false &&  document.getElementById("chklow").checked == false  &&  document.getElementById("chknum").checked == false && document.getElementById("chkspec").checked == false){
      document.getElementById("notifications").innerHTML ="please specify the charcters of the password to be used.";
      console.log("sent character error to text feild");
      console.log("no char selected");
    }
    else{
      passwordrtn=[];
       console.log(typeof passwordrtn);
        confirmready();
        
       
    }
}


function confirmready (){
  arrayofchar = [];
  console.log(arrayofchar);
  
 if(document.getElementById("chkupp").checked){
   arrayofchar.push("uppercase");
   
   }
 
 if(document.getElementById("chklow").checked){
  arrayofchar.push("lowercase");
  
 }
 if(document.getElementById("chknum").checked){
  arrayofchar.push("numbers");
  
 }
 if(document.getElementById("chkspec").checked){
  arrayofchar.push("special");
  
 }
 let aok = confirm("you have chosen a password containing "+arrayofchar+" and a length of "+passlength+ " press ok to confirm");
  if(aok === true){
    makepasword();
    
  }
}


function makepasword (){

   for( let i=0; i < passlength; i++){
    let order = Math.random();
    let usedarr = [];
      if (order > 0.4999999){
        lowercase.reverse();
        uppercase.reverse();
        numbers.reverse();
        special.reverse();
        console.log ("arrays were reversed");
      }
      if(document.getElementById("chkupp").checked){
        usedarr.push(uppercase);
      }
      if(document.getElementById("chklow").checked){
          usedarr.push(lowercase);  
      }  
      if(document.getElementById("chknum").checked){
          usedarr.push(numbers);  
      }
      if(document.getElementById("chkspec").checked){
          usedarr.push(special);
      }
      let order2 = Math.random;
      if (order2 < 0.4999999){
          usedarr.reverse();
          console.log("usedarr was reversed");
      }
      console.log(usedarr);
      charcheck = usedarr[Math.floor(Math.random()*usedarr.length)];
      console.log(charcheck);
      usedkey = charcheck[Math.floor(Math.random()*charcheck.length)];
      console.log(usedkey);
      if (typeof passwordrtn === "undefined"){
          passwordrtn = usedkey;
          console.log(passwordrtn);
      } 
      else{
        passwordrtn += usedkey;
        console.log(passwordrtn);

      }  
    }
  writePassword();
}


function passEnsure(){
  for(i=0; i<arrayofchar;i++){
    let a = arrayofchar[i];
    let b = a[Math.floor(Math.random()*a.length)];
    ensure.push(b);

  }
  let c = passwordrtn.split();
  for(i=0;i<c;i++){
    c[Math.floor(Math.random()*c.length)].push(ensure[i])
  }
passwordrtn = c ;
}


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordrtn;
}