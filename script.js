document.addEventListener("DOMContentLoaded" , function(){
  document.querySelector("#submit").disabled = true;
  document.querySelector("#text").onkeyup = function(){
    if( document.querySelector("#text").value.length > 5 ){
      document.querySelector("#submit").disabled = false;

    }else{
      document.querySelector("#submit").disabled = true;

    }
  }

  document.querySelector("form").onsubmit = function(){
    let text = document.querySelector("#text").value;
    let new_li = document.createElement("li")

    new_li.innerHTML = text;

    document.querySelector("#result").appendChild(new_li);

    document.querySelector("#text").value = '';
    document.querySelector("#submit").disabled = true;

    return false;
  }

})