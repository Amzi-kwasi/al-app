import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";




function Ers(){
    let confirm=confirm("Are you sure you want to delete permanently?")
        if(confirm == true){
        localStorage.clear();
        window.location.reload()
        }
    }

// 	let form = document.getElementById("form");
// let textInput = document.getElementById("textInput");
// let dateInput = document.getElementById("dateInput");
// let textarea = document.getElementById("textarea");
// let msg = document.getElementById("msg");
// let tasks = document.getElementById("tasks");
// let add = document.getElementById("add");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   formValidation();
// });

// let formValidation = () => {
//   if (textInput.value === "") {
//     console.log("failure");
//     msg.innerHTML = "Task cannot be blank";
//   } else {
//     console.log("success");
//     msg.innerHTML = "";
//     acceptData();
//     add.setAttribute("data-bs-dismiss", "modal");
//     add.click();

//     (() => {
//       add.setAttribute("data-bs-dismiss", "");
//     })();
//   }
// };

// let data = [{}];

// let acceptData = () => {
//   data.push({
//     text: textInput.value,
//     date: dateInput.value,
//     description: textarea.value,
//   });

//   localStorage.setItem("data", JSON.stringify(data));

//   console.log(data);
//   createTasks();
// };

// let createTasks = () => {
//   tasks.innerHTML = "";
//   data.map((x, y) => {
//     return (tasks.innerHTML += `
//     <div id=${y}>
//           <span className="fw-bold">${x.text}</span>
//           <span className="small text-secondary">${x.date}</span>
//           <p>${x.description}</p>
  
//           <span className="options">
//             <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" className="fas fa-edit"></i>
//             <i onClick ="deleteTask(this);createTasks()" className="fas fa-trash-alt"></i>
//           </span>
//         </div>
//     `);
//   });

//   resetForm();
// };

// let deleteTask = (e) => {
//   e.parentElement.parentElement.remove();
//   data.splice(e.parentElement.parentElement.id, 1);
//   localStorage.setItem("data", JSON.stringify(data));
//   console.log(data);
  
// };

// let editTask = (e) => {
//   let selectedTask = e.parentElement.parentElement;

//   textInput.value = selectedTask.children[0].innerHTML;
//   dateInput.value = selectedTask.children[1].innerHTML;
//   textarea.value = selectedTask.children[2].innerHTML;

//   deleteTask(e);
// };

// let resetForm = () => {
//   textInput.value = "";
//   dateInput.value = "";
//   textarea.value = "";
// };

// (() => {
//   data = JSON.parse(localStorage.getItem("data")) || []
//   console.log(data);
//   createTasks();
// })();



export default function Todo() {
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Todo</a>
    </div>
    <br/>
    <br/>


<input type="text" placeholder="Search" title="Search"/>


    <div id="addNew" data-bs-toggle="modal" data-bs-target="#form">
      <span>Add New Task</span>
      <i className="fas fa-plus"></i>
    </div>

    <form className="modal fade" id="form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Task Title</p>
            <input type="text" className="form-control" name="" id="textInput"/>
            <div id="msg"></div>
            <br/>
            <p>Due Date</p>
            <input type="date" className="form-control" name="" id="dateInput"/>
            <br/>
            <p>Description</p>
            <textarea name="" className="form-control" id="textarea" cols="30" rows="5"></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" id="add" className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </form>




<br/>
<br/>
<br/>
<br/>
    <h5 className="text-center my-3 ">Create tags to organize your notes</h5>


<br/>
<br/>
<br/>
<br/>

    <div id="tasks">

    </div>


<br/>
<br/>
<br/>
<br/>

    <button onClick={Ers} id="del">Delete All</button>
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