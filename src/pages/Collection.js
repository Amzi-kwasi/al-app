import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React from 'react';
import ScrollToTop from "react-scroll-to-top"
import TNav from "../component/topnav";
import Footer from "../Footer";
import Mycmd from "../component/Mycmd";





function Search() {
    // Declare variables 
    var input, filter, list, h, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    document.getElementById("collection");
    list = document.querySelectorAll(".list");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < list.length; i++) {
        h = list[i].getElementsByTagName("h")[0];
        if (h) {
            txtValue = h.innerHTML;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            }
        }
    }
}


// function Inpp() {
//   // Declare variables
//   let input, filter, ul, li, a, i, textValue;
//   input = document.getElementById("inputt");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("gila");
//   li = ul.getElementsByTagName("h6");
//   for (i = 0; i < ul.length; i++) {
//     a = ul[i].getElementsByTagName("h6")[0]
//     textValue = a.innerText;
//     if (textValue.toUpperCase().indexOf(filter) > -1) {
//       a.style.color = "black";
//     } else {
//       a.style.color = "green";
//     }
//   }
// }


function save(){
    
    var mod=document.getElementById("mod")
    document.getElementById("module_name").innerHTML=mod.value=localStorage.getItem("o");
    mod.value=localStorage.getItem("o");
    

    document.getElementById("module").style.display=localStorage.getItem("d")
    
}

const Collection = () => {
    return (
      <body onLoad={save}>

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
    <br/>
    <br/>
    <br className="br"/>
    <br className="br"/>


    <div>
        <input type="text" placeholder="Search..." id="search" onKeyUp={Search} className="search-here" />
    </div>
<br className="br"/>
<br className="br"/>
<br/>
<br/>

    <div id="collection">
       <div className="row div-row">
        <div className="col-lg-4">
            <div className="list">
                <img src={require('../img/el.png')} className="list-img align-items-center" alt="" />
                <h className="h uni">E-Learning</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2021</p> 
                
            </div>
        </div>
        <div className="col-lg-4">
        <Link to="/dashbrd"><div className=" list">
                <img src={require('../img/dashboard.png')} className="list-img align-items-center" alt="" />
                <h className="h">Dashboard</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
               
            </div>
            </Link>
        </div>
        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/ecommerce.png')} className="list-img align-items-center" alt="" />
                <h className="h uni">Ecommerce</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2023</p>
                
            </div>
        </div>
    </div>

    <div className="row div-row">
        <div className="col-lg-4">
            <Link to="/board"><div className=" list">
                <img src={require('../img/whiteboard.jpg')} className="list-img align-items-center" alt="" />
                <h className="h">Whiteboard</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
                
            </div>
            </Link>
        </div>

        <div className="col-lg-4 ">
            <div className=" list">
                <img src={require('../img/sales.png')} className="list-img align-items-center" alt="" />
                <h className="h">Sales</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2020</p>
                
            </div>
        </div>
        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/time.png')} className="list-img align-items-center" alt="" />
                <h className="h uni">Time</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2020</p>
                
            </div>
        </div>
    </div>
    <div className="row div-row">
        <div className="col-lg-4">
            <Link to="/website"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/web.png')} className="list-img align-items-center" alt="" />
                <h className="h">Website</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2021</p>
                
            </div>
            </Link>
        </div>
        

        <div className="col-lg-4">
            <Link to="*"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Spreadsheet</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
                
            </div>
            </Link>
        </div>
        
        <div className="col-lg-4 " title="Online Note Editor">
            <Link to="/note"><div className=" list">
                <img src={require('../img/note.png')} className="list-img align-items-center" alt="" />
                <h className="h">Online Note Editor</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
            </div>
            </Link>
        </div>

         
        <div className="col-lg-4 " title="Online Note Editor">
            <Link to="/notepad"><div className=" list">
                <img src={require('../img/note.png')} className="list-img align-items-center" alt="" />
                <h className="h">Notepad</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
            </div>
            </Link>
        </div>



        <div className="col-lg-4 " title="Code Editor">
            <Link to="/code"><div className=" list">
                <img src={require('../img/code.png')} className="list-img align-items-center" alt="" />
                <h className="h">Code Editor</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
               
            </div>
            </Link>
        </div>




        
        <div className="col-lg-4 " title="Typescript">
            <Link to="*"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Typescript</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>





        
        <div className="col-lg-4 " title="cmd">
            <Link to="/cmd_doc"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Command Prompt Documentation</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>


        <div className="col-lg-4 " title="todo app">
            <Link to="/todo"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Todo App</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>




        <div className="col-lg-4 " title="Color Identifier">
            <Link to="/colo"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Color Identifier</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>


        <div className="col-lg-4">
            <Link to="/gly"><div className=" list"  style={{cursor:"pointer"}}>
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Gallery</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2022</p>
                
            </div>
            </Link>
        </div>

        <div className="col-lg-4 " title="Document">
            <Link to="/doc"><div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h">Document</h>
                <p className="h-a">Learn more</p>
                <p className="h-2">2023</p>
               
            </div>
            </Link>
        </div>

        <div className="col-lg-4 none" id="module">
            <div className=" list">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="" />
                <h className="h uni" id="module_name">New Module</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2024</p>
                
            </div>
        </div>


        <div className="col-lg-4">
            <div className=" list">
                <img src={require('../img/contact.png')} className="list-img align-items-center" alt="" />
                <h className="h uni">Contact</h>
                <p className="h-a uni">Learn more</p>
                <p className="h-2 uni">2021</p>
                
            </div>
        </div>
    </div>
    </div>



    <br/>
<br/>
<br/>
<br/>
<br/>
<br/>



    <ScrollToTop smooth/>
       <div className="navbarc" id="myNavbarc">
             <Link to="*"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone act" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>
<Mycmd />
      <Footer />
      </body>
    )
  }
  
  export default Collection;