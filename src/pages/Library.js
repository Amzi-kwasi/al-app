import Footer from "../Footer";
import "../component/Navbarscroll";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";
import Mycmd from "../component/Mycmd"

function Library() {
    return (
        <>
    <TNav />
    <div className="topnav" id='mxw_nav'>
        <center>
        <Link to="*"><span title="Home"><i className='fa fa-home'></i>&ensp;Home</span></Link>
        <Link to="/library"><span className="active" title="Library"><i className='fa fa-book'></i>&ensp;Library</span></Link>
        <Link to="/contact"><span title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</span></Link>
        <Link to="/dic"><span title="Search"><i className='fa fa-search-plus'></i>&ensp;ITD</span></Link>
        <Link to="/collection"><span title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</span></Link>
        </center>    
    </div>
    <br/>
    <br/>
    <br className="br"/>
    <br className="br"/>
    

    <div className="page-heading products-heading header-text animate__animated animate__zoomIn">
    
          <div className="col-md-12">
            <div className="text-content">
              <h2>Library</h2>
            </div>
        </div>
    </div>


      <div>    
        <p className="animate__animated animate__fadeInRight">Browse our current publications based on your interest. You can also read online or download a copy of our publication.</p>
        
        <br/>
        <br/>
        <hr style={{border:'1px solid lightgrey'}}/>
        
        <h5 className="txt">&emsp;&emsp;Books</h5>
        <section className="lb-main myUL">
            <div className="lb-main-item">
                    <Link to="/main"><img src={require('../img/lap.png')} className="lib-img" alt="lib"/>
                    
                    <br/>
                    <br/>
                    <a><p className="lb-text">Computer Systems</p></a>
                    </Link>
            </div>
            <div className="lb-main-item">
                    <Link to="/health"><img src={require('../img/vegetables.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a><p className="lb-text">Healthy Lifestyle--<br/>How to keep Health</p></a>
            </Link>
            </div>
            <div className="lb-main-item">
                <img src={require('../img/elec.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a href="/"><p className="lb-text">Electricals</p></a>
            </div>

            <div className="lb-main-item">
                <Link to="/arch"><img src={require('../img/achi.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a><p className="lb-text">Architectural Drawing</p></a>
            </Link>
            </div>
            
            <div className="lb-main-item">
                <Link to="/lrn"><img src={require('../img/lrn.png')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a><p className="lb-text">Learn to Code</p></a>
            </Link>
            </div>
        </section>
<br/>

<br/>

        <h5 style={{textTransform: "none"}} className="left">&emsp;&emsp;&emsp;Videos</h5>
        <section className="lb-main" id="myUL">
            <div className="lb-main-item">
                    <img src={require('../img/lap.png')} className="lib-img" alt="lib"/>
                    
                    <br/>
                    <br/>
                    <a href="/"><p className="lb-text">Computer Systems</p></a>
            </div>
            <div className="lb-main-item">
                    <img src={require('../img/vegetables.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a href="/"><p className="lb-text">Healthy Lifestyle--<br/>How to keep Health</p></a>
            </div>
            <div className="lb-main-item">
                <img src={require('../img/elec.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a href="/"><p className="lb-text">Electricals</p></a>
            </div>
            <div className="lb-main-item">
                <img src={require('../img/arts.jpg')} className="lib-img" alt="lib"/>
                    <br/>
                    <br/>
                    <a><p className="lb-text">Creativity</p></a>
            </div>
        </section>

    </div>



<ScrollToTop smooth/>
 <div className="navbarc" id="myNavbarc">
             <Link to="*"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book act" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>
<Mycmd />
<Footer />
      
      </>
    )
  };


  

  export default Library;

 