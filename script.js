document.getElementById("submitMail").addEventListener("click", submitMail);

document.getElementById("terms").addEventListener("click",enableMailSubmit);

function enableMailSubmit(){
  document.getElementById("submitMail").disabled = !document.getElementById("terms").checked;
}

function submitMail(){
  var x = document.getElementById("emailInput");
  var time = 3000;
  document.getElementById("msg_error").style.opacity = 0;
  console.log("S: " + document.getElementById("msg_error").style.opacity);
  if(x.value === ""){
    document.getElementById("msg_error").style.opacity = 1;
    document.getElementById("msg_e").innerHTML = "The mail address can't be empty";
    setTimeout(disable_error_msg,time);
  }else if(!x.value.includes("@")){
    document.getElementById("msg_error").style.opacity = 1;document.getElementById("msg_e").innerHTML = "The mail address has to include an '@'!";
    setTimeout(disable_error_msg,time);
  }else{
    document.getElementById("msg_success").style.opacity = 1;document.getElementById("msg_s").innerHTML = "You are registered to our newsletter! Enjoy it!";
    setTimeout(disable_success_msg,time);
  }
}

function disable_success_msg(){
  document.getElementById("msg_success").style.animation = "fadeout 2s forwards";
}

function disable_error_msg(){
  document.getElementById("msg_error").style.animation = "fadeout 2s forwards";
}