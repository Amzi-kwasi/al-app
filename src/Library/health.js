import Footer from "../Footer";
// import { Outlet, Link } from "react-router-dom";
import "../component/Navbarscroll";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";


import TNav from "../component/topnav";


function Health() {
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
        <Link to="/library"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Library</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Healthy Lifestyle</a>
    </div>
    <br/>
    <br/>



    <div className="page-heading prod-heading header-text animate__animated animate__zoomIn">
      
          <div className="col-md-12">
            <div className="text-content">
              <h2>Healthy Lifestyle</h2>
            </div>
          </div>
        </div>
      
      
<br/>
    <div>
    <h6 style={{color:"#E45F4E"}}>Lessons</h6>
    </div>
    <hr style={{border: "0.5px solid lightgrey"}}/>


    
    <Link to="/hls"><div className="list-p">
                <img src={require('../img/hls.png')} className="list-img align-items-center" alt="image" />
                <h className="h">Lesson 01</h>
                <br/>
                <a className="c-a">Healthy living guide</a>
                <br/>
                <h className='h' style={{fontSize:"12px"}}>A digest on healthy eating and healthy living</h>
            </div>
        </Link>
        
            <div className=" list-p">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Lesson 02</h>
                <br/>
                <a className="c-a" style={{fontSize:"12px"}}>Popular Diets-<i style={{color:"orange"}}>Do they actually work for weight loss?</i></a>
                
            </div>
        
        
    <div className="list-p">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Lesson 03</h>
                <br/>
                <a className="c-a" style={{fontSize:"12px"}}>Stress And Health</a>
                
            </div>
        
        
            <div className=" list-p">
                <img src={require('../img/loader.gif')} className="list-img align-items-center" alt="image" />
                <h className="h">Lesson 04</h>
                <br/>
                <a className="c-a" style={{fontSize:"12px"}}>10 Tips To Keep Moving</a>
                
            </div>
    
<ScrollToTop smooth/>
 <div className="navbarc" id="myNavbarc">
             <Link to="/"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book act" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>

<Footer />
    </>
    )
}
export default Health;