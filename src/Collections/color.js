
import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top"


import TNav from "../component/topnav";




function coL(){
    var coL=document.getElementById("coL");

    document.getElementById("color").innerText= coL.value;
      
}

function mixcoL(){
    var fcol=document.getElementById("1col").value;
    var scol=document.getElementById("2col").value;
    var mixprev=document.getElementById("mixprev")
    mixprev.style.background="linear-gradient("+fcol+","+scol+")"
       
}



function Find(){
    var find=document.getElementById("find").value;
    var span=document.getElementById("prev")
    var ptxt=document.getElementById("txt")
 
    
    span.style.background=find;
    ptxt.innerText=find;
    
}

function ranD(){
    var random=Math.floor(Math.random() * Colist.length)
    var rD=document.getElementById("rtxt")
    var raD=document.getElementById("rand")
    rD.innerText=Colist[random]
    raD.style.background=Colist[random]
}


var Colist=[
    "Red","Aliceblue","Aqua","Aquamarine","Azure","Beige","Bisque","Pink","Yellow","Black","Blue","burlywood","antiquewhite","blanchedalmond","blueviolet","brown","cyan","cornflowerblue","cadetblue","coral","darkgreen","darkolivegreen","chartreuse","chocolate","darkcyan","darkgoldenrod","darkblue","darkmagenta","darkkhaki","darkorchid","darkred","darksalmon","darkseagreen","deepskyblue","firebrick","dodgerblue","floralwhite","forestgreen","darkorange","darkturquoise","darkgrey","darkgray","deeppink","dimgray","darkorange","darkviolet","darkcyan","darkslategreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","orange","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","darkslategray","Lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightskyblue","lightseagreen","lightsteelblue","lightslategrey","lightyellow","lime","limegreen","linen","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olive","olivedrab","orangered","orchid","palegoldenrod","paleturquoise","navy","papayawhip","palevioletred","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellowgreen","lavender","lavenderblush","ivory"
    ]


function Loadit(){    

for(var i=0; i< Colist.length; i++){
    
var list=document.getElementById("list");

var li=document.createElement("li");
list.append(li)
    li.innerText= Colist[i] +"\n\n\n";
  
    
    Colist.forEach(()=>{
        
    li.style.backgroundColor= Colist[i];
    li.style.textAlign="center"
    li.style.fontSize="20px"
    li.style.marginTop="15px"
    li.style.marginBottom="15px"
    li.style.marginLeft="20px"
    li.style.marginRight="20px"
    
})
}
}

export default function CoLor(){
    return(
        
     <body onLoad={Loadit}>
     
<TNav />      <div className="topnav" id='mxw_nav'>
        <center>
        <Link to="*"><span title="Home"><i className='fa fa-home'></i>&ensp;Home</span></Link>
        <Link to="/library"><span title="Library"><i className='fa fa-book'></i>&ensp;Library</span></Link>
        <Link to="/contact"><span title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</span></Link>
        <Link to="/dic"><span title="Search"><i className='fa fa-search-plus'></i>&ensp;ITD</span></Link>
        <Link to="/collection"><span title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</span></Link>
        </center>
    </div>
     
   
<br className="br"/>
<br className="br"/>
<div className="sub-nav">
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Color</a>
    </div>
    <br/>
    <br/>


<h6 style={{textAlign:'center'}}>Choose a color</h6>
<input type="color" className="color" onInput={coL} id="coL"/>
<br/>
<p style={{textAlign:'center'}} id="color"></p>
<br/>
<br/>
<h6 style={{textAlign:'center'}}>Or</h6>
<br/>
<br/>
<input type="text" id="find" className="find" placeholder="Find a color" onInput={Find}/>
<br/>
<br/>
<br/>
<h6 style={{textAlign:'center'}}>Selected Color</h6>
<div className="prev" id="prev"><p id="txt"></p></div>
 <br/>
 <br/>
 <br/>
 
 <h6 style={{color:'teal',textAlign:'center'}}>Color Mix</h6>
 <br/>
 <br/>
 <input type="color" className="mixc"  id="1col"/>
  <input type="color" className="mixc" id="2col"/>
  
  <br/>
  <br/>
  <button onClick={mixcoL} className="mix">Mix Color</button>
  <br/>
  <br/>
 
 <div className="mixprev" id="mixprev"></div>
 
 <br/>
 <br/>
 <br/>
 <br/>
 <button onClick={ranD} id="ran" className="mix">Random Color</button>
 <br/>
 <br/>
 <div className="prev" id="rand"><p id="rtxt"></p></div>
 <br/>
 <br/>
 <br/>
 <br/>
<h6 style={{textAlign:'center'}}>Colors</h6>
<ul id="list"></ul>
    

      <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="*"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>
   
        </body>
    )
}