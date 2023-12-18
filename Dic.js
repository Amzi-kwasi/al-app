import { useState, useEffect } from "react";


import TNav from "../component/topnav";

import { Link } from "react-router-dom";
// import axios from "axios";



const loading= {
  fontSize: "25px",
  textAlign:"center"
}


setTimeout(function(){
  document.getElementById("loading").style.display="none";
}, 2000)


function Dic(){

// var path = "https://dummyjson.com/products";
// var [dic, setDic]= useState([]);

// useEffect(() => {
// fetch(path)
// .then(main => main.json())
// .then(main => setDic(main.products))
// },[])




// var [pg, setPg] = useState([])

// useEffect(() => {
//   axios
//     .get("//db.json")
//     .then(res => res.json())
//     .then(res => setPg(res.data))
//     .catch((err) => console.log(err));
// }, []);

//  var [pg, setPg] = useState([])

//  useEffect(() =>{
// fetch("//db.json")
// .then(res => res.json())
// .then((json) => setPg(json))
//  })

var [api,setApi]= useState([])

const getData = () =>{
  fetch('http://localhost:3001/terms')
  .then((res) =>{
    console.log(res)
    return res.json();
  })
  .then((jsn)=> {
    console.log(jsn);
    setApi(jsn)
  });
}

useEffect(() => {
  getData()
},[])


// useEffect(() => {
// fetch('http://localhost:3001/users')
// .then(res => res.json())
// .then(res =>console.log(res))
// .then(json => setApi(res))
// },[])
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
          <div className="topnav" id='mxw_nav'>
        <Link to="/"><span title="Home"><i className='fa fa-home'></i>&ensp;Home</span></Link>
        <Link to="/library"><span title="Library"><i className='fa fa-book'></i>&ensp;Library</span></Link>
        <Link to="/contact"><span title="Contact"><i className='fa fa-phone'></i>&ensp;Contact</span></Link>
        <Link to="/dic"><span title="Search" className="active"><i className='fa fa-search-plus'></i>&ensp;ITD</span></Link>
        <Link to="/collection"><span title="Tools"><i className='fa fa-clone'></i>&ensp;Tools</span></Link>
    </div>
    
          <br/>
          <br/>
          <br/>
          <br/> 
{/* 
      {dic.map((items) => (
      
<div className="row div-row" key={items.id}>
  <div className=" col-lg-4 ">
          <img src={items.thumbnail} className="align-items-center" alt=""/>
          <h3>{items.title}</h3>
          <h5>{items.description}</h5>
          <h4 style={{color:"blueviolet`"}}>{items.brand}</h4>
          <h5 style={{color:"red"}}>${items.price}</h5>
  </div>
  </div>
      ))}
 */}
{/* 
{pg.map((host) => (
  <div key={host.id}>
  <h3>{host.firstName}</h3>
  </div>
))} */}

{api.map((txt) => (
  <table id="myTable">
    <tr>
    <th style={{width:"40%"}}>Abbreviation</th>
    <th style={{width:"60%"}}>Meaning</th>
      </tr>  
        <tr>
          <td>{txt.abbreviation}</td>
        
          <td>{txt.meaning}</td>
        </tr>
  </table>
))}

      <h3 id="loading" style={loading}>Loading...</h3>

        <div className="navbarc" id="myNavbarc">
             <Link to="/"><span className="fa fa-home" title="Home"><br/><small className="smaller">Home</small></span></Link>
             <Link to="/library"><span className="fa fa-book" title="library"><br/><small className="smaller">Library</small></span></Link>
             <Link to="/contact"><span  className="fa fa-phone" title="contact"><br/><small className="smaller">Contact</small></span></Link>
             <Link to="/dic"><span className="fa fa-search-plus act" title="search for"><br/><small className="smaller">ITD</small></span></Link>
             <Link to="/collection"><span className="fa fa-clone" title="collection"><br/><small className="smaller">Tools</small></span></Link>
        </div> 

        </>
    );

}
  
  export default Dic;