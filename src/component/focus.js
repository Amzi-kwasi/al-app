
 document.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
  var input=  document.querySelectorAll("input");

  for(var i=0; i< input.length; i++){
    if(input[i].type == "text"){
        input[i].focus()
    }
  }
}
 });
