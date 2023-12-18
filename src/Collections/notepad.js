// import { useEffect, useState } from "react";
// import uuid from "react-uuid";
// import Main from "./main/Main";
// import Sidebar from "./sidebar/Sidebar";
import "./note.css";
import "../sys.css";
import "../asv.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import TNav from "../component/topnav";


function Notepad() {
  // const [notes, setNotes] = useState(
  //   localStorage.notes ? JSON.parse(localStorage.notes) : []
  // );
  // const [activeNote, setActiveNote] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  // const onAddNote = () => {
  //   const newNote = {
  //     id: uuid(),
  //     title: "Untitled Note",
  //     body: "",
  //     lastModified: Date.now(),
  //   };

  //   setNotes([newNote, ...notes]);
  //   setActiveNote(newNote.id);
  // };

  // const onDeleteNote = (noteId) => {
  //   setNotes(notes.filter(({ id }) => id !== noteId));
  // };

  // const onUpdateNote = (updatedNote) => {
  //   const updatedNotesArr = notes.map((note) => {
  //     if (note.id === updatedNote.id) {
  //       return updatedNote;
  //     }

  //     return note;
  //   });

  //   setNotes(updatedNotesArr);
  // };

  // const getActiveNote = () => {
  //   return notes.find(({ id }) => id === activeNote);
  // };

  return (
    <>
      
<TNav /> 
     <div className="topnav" id='mxw_nav'>
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
        <Link to="/collection"><a style={{cursor: "pointer" , color:"#009000" , fontSize:"16px"}}>Tools</a><i className="fa fa-angle-right" style={{color:"green"}}></i></Link><a style={{ fontSize:"16px"}}>Notepad</a>
    </div>
    <br/>
    <br/>

      {/* <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} /> */}
    
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

export default Notepad;
