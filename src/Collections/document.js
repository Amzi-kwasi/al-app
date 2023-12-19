import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top"


import TNav from "../component/topnav";




function Sml(){
    document.getElementById("font").style.fontSize="16px";
}

function Mdm(){
    document.getElementById("font").style.fontSize="25px";
}
function Big(){
    document.getElementById("font").style.fontSize="34px";

}





           



export default function Doc() {
    const [url, setUrl] =useState('');
    const uploader = (file) =>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        localStorage.setItem('recent-image',reader.result)
        setUrl(localStorage.getItem('recent-image'));
})
    reader.readAsDataURL(file);
}
useEffect(() => {
    setUrl(localStorage.getItem('recent-image'));
}, []);



const localNotes =localStorage.getItem("notes");
const [notes, setNotes] = useState(localNotes);

const handleChange = e => {
    localStorage.setItem("notes", e.target.value);
    setNotes(e.target.value);
}
  return (
    <>

<TNav />    
  <div className="topnav" id='mxw_nav'>
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
        <Link to="/collection"><a style={{cursor:'pointer' , color:'#009000'}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Document</a>
    </div>
    <br/>
    <br/>

    <div>
        
        <img src ={url}/>
    </div>

    <div className="buttons">
        <span className="btnx" onClick={Sml} id="act">A</span>
        <span className="btnx" onClick={Mdm}>A</span>
        <span className="btnx" onClick={Big}>A</span>
    </div>
    <br/>
    <br/>

    <div id="font" class="maincont">

<textarea type="text" value={notes} onChange={handleChange} style={{width:"100%" , height:"200vh",border:"none"}} placeholder="|"></textarea>
{/* 
<textarea type="text"  name="doc-2" id="doc-2" onKeyUp={saveValue} style={{width:"100%" , height:"200vh",border:"none"}} placeholder="|"></textarea> */}

</div>

      <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="*"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>
    </>
  );
}