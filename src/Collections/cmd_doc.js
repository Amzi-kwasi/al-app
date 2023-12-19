import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top"


import TNav from "../component/topnav";
;

function CmdDoc() {
  

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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Command Prompt Documentation</a>
    </div>
    <br/>
    <br/>


<div>
    <p>With the in built Command Prompt, you are able to perform some task on the site. To be able to access the in built prompt just key in <a className="red">Alt+q</a> to call the prompt. To hide the prompt or to exit just press the <b className="orange">escape key</b> on the keyboard. This feature can only be accessible on the desktop. We will add this feature on mobile devices soon. Some task you can perform are listed below.</p>
    <ul>
    <li>JS Function</li>
    <li>Navigation</li>
    <li>Configuration</li>
    <li>Customization</li>
    </ul>

<h6>JS Function</h6>
<p>With the command prompt it is easy to perform js. With a few commands you can perform tasks. In the prompt you can type:
    <ul>
        <li>import alertjs</li>
        or
        <li>import timer</li>
        </ul> This are just a few commands to type when performinng js function in the prompt. More commands will be added soon</p>
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

export default CmdDoc;
