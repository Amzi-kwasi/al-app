
    document.addEventListener("keydown",(e)=>{
        if(e.altKey && e.key ==="q"){
            var cmd =document.getElementById("cmd")
            cmd.style.display="block";
            document.getElementById("exe").focus()
            }
           else if(e.key ==="Escape"){
            var cmd =document.getElementById("cmd")
            cmd.style.display="none"
           }
    });
    

    function Module(){
   
        var mod=document.getElementById("mod")
        localStorage.setItem("o", mod.value)
        document.getElementById("module_name").innerHTML=mod.value;
        
          }
        

function tool(){
    var exe=document.getElementById('exe').value;

    if(exe == "navigate"){
        var prmt=prompt("Navigate to");

        window.location.assign("/"+ prmt)
    }


    if(exe == "import alertjs"){
        var prmt=prompt("Alert info");
          alert(prmt)
    }

    if(exe == "asvl host"){
        var host=window.location.hostname
            document.getElementById("mesg").innerHTML=host;
    }
    
    if(exe == "asvl href"){
        var host=window.location.href
            document.getElementById("mesg").innerHTML=host;
    }

    
    if(exe == "asvl origin"){
        var origin=window.location.origin
            document.getElementById("mesg").innerHTML=origin;
    }
    
    if(exe == "asvl pathname" || exe == "/"){
        var host=window.location.pathname
            document.getElementById("mesg").innerHTML=host;
    }

    if(exe == "asvl port"){
        var host=window.location.port
            document.getElementById("mesg").innerHTML=host;
    }
    
    if(exe == "asvl protocol"){
        var host=window.location.protocol
            document.getElementById("mesg").innerHTML=host;
    }
    

    if(exe == "add module"){
        var module=document.getElementById("module");
        localStorage.setItem("d", module.style.display="flex")
       module.style.display="flex";
       if(module.style.display===localStorage.getItem("d") && exe == "add module"){
        alert("Module already created! One module allowed");
       }
    }

    if(exe == "add module name"){
        var mod=document.getElementById("mod");
mod.style.display="block";      
mod.focus()
    }
    

    if(exe == "reload"){
        window.location.reload()
        }

        if(exe == "asvl language"){
            var host=window.naigator.language
                document.getElementById("mesg").innerHTML=host;
        }
}


export default function Mycmd(){
return(
    <>
    <div className="cmd" id="cmd">
        <p>Microsoft Windows [Version 10.0.19045.3570]
(c) Microsoft Corporation. All rights reserved.</p>
<a id="mesg"></a><input onKeyUp={Module} id="mod"/>
<br/>
    <a>C:\</a>&nbsp;
    <input type="text" id="exe" autoComplete="off"  onKeyUp={tool}/>
    </div>
    </>
)
}