import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";
import Canvas from "../component/Canvas";




const Whitebrd = () => {
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Whiteboard</a>
    </div>
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
        <div style={{overflowX:"auto"}}>
        <Canvas
        height={1500}
        width={1500} 
      />
      </div>

      </>
    )
  }
  
  export default Whitebrd;