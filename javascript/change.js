var form1 = document.querySelector(".form");
var form2 = document.querySelector(".form-2"); 

function changeOne() {
  
    form1.className = "form hide";
    form2.className = "form-2 anime";
  
}

function changeTwo() {
  
    form1.className = "form anime";
    form2.className = "form-2 hide";
  
}