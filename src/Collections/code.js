import "../sys.css";
import "../asv.css";
import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top"


import TNav from "../component/topnav";

import Footer from "../Footer";
// import CodeEditor from '@uiw/react-textarea-code-editor';
// import Editor from 'react-simple-code-editor'; 
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript'; 
// import 'prismjs/themes/prism.css';


function myResult(){
  let result = document.getElementById("dm");
  
     if(result.innerHTML == "Result"){
      result.innerHTML = "Editor";
     }
     else if (result.innerHTML == "Editor") {
      result.innerHTML = "Result";
     }
     
 document.getElementById('myOut').classList.toggle('show');
 document.getElementById("editor").classList.toggle('hide');
 document.getElementById("bck").classList.toggle('hide');
}




function Compile() {
  var html = document.getElementById("html");
  // var css = document.getElementById("css");
  // var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  code.open();
    code.writeln(
      html.value 
    );
    code.close();
}
 


export default function Code() { 

  const localNotes =localStorage.getItem("code");
  const [code, setNotes] = useState(localNotes);
  
  const Editor = e => {
      localStorage.setItem("code", e.target.value);
      setNotes(e.target.value);
  }
  // document.documentElement.setAttribute('data-color-mode', 'dark');
  // document.documentElement.setAttribute('data-color-mode', 'light');
  
  // const [code, setCode] = React.useState( `function add(a, b) {\n return a + b;\n}` ); 
  return (
    <>

<TNav />      <div className="topnav" id='mxw_nav'>
        <center>
        <Link to="/"><span title="Home"><i className='fa fa-home'></i>&ensp;Home</span></Link>
        <Link to="/library"><span title="Library"><i className='fa fa-book'></i>&ensp;Library</span></Link>
        <Link to="/contact"><span title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</span></Link>
        <Link to="/dic"><span title="Search"><i className='fa fa-search-plus'></i>&ensp;ITD</span></Link>
        <Link to="/collection"><span title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</span></Link>
        </center>
    </div>
     
   
<br className="br"/>
<br className="br"/>
    <div className="sub-nav">
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Code Editor</a>
    </div>
    <br/>
    

    {/* <Editor value={code} onValueChange={code => setCode(code)} 
   highlight={code => highlight(code, languages.js)} padding={10} 
   style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 12, }} /> 
 */}



{/* 
    <CodeEditor value={code} language="js" 
  placeholder="Please enter JS code."
   onChange={(evn) => setCode(evn.target.value)} data-color-mode="dark" 
   padding={15} style={{ fontSize: 12, backgroundColor: "#f5f5f5", fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace', }} 
   /> */}


<div class="div-flex" id="edtr">
     <button onClick={myResult} className="demo" id="dm">Result</button>
<div className="editor split" id="editor">
  <textarea id="html" onKeyUp={Compile}  onChange={Editor} value={code} placeholder="type your code here ...">
  </textarea>
    </div>

    
    <div className="iframe-split" id="myOut">
    <iframe  id="code"></iframe>
    </div>
    </div>


<Footer />
      <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="/"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>
    </>
  );
}