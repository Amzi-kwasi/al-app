import { Outlet, Link } from "react-router-dom";
import "../asv.css";
import "../sys.css";
import "../component/Navbarscroll";

const Nav = () => {
    
    return(
        <>
        <div className="navbarc" id="myNavbarc">
             <Link to="/"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div>


        <Outlet />
        </>
    )
}

export default Nav;