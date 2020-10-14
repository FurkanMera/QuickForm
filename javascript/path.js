var css = [
  
  { path: "css/background.css" }, 
  { path: "css/box.css" }, 
  { path: "css/form.css" }, 
  { path: "css/form-2.css" }
  
  ];
  
  
 var head = document.querySelector("head");
  
css.forEach(function(link) {
  
 var list = "";
   
 list = '<link rel="stylesheet" href="'+link.path+'" type="text/css" />';
  
  head.innerHTML += list;
  
});