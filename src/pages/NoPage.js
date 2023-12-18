
import Mycmd from "../component/Mycmd"


var button={
  backgroundColor:"transparent",
  border:"1px solid green",
  borderRadius:"20px",
  padding:"10px 12px",
  marginTop:"120px"
}

var h3={
  fontSize:"15rem",
  textAlign:"center",
  marginTop:"200px",
  fontWeight:"bold"
}



function bck(){
  window.history.back()

}
const NoPage = () => {
    return (
      <>
      <h3 style={h3}>404</h3>
   <center>
      <button style={button} onClick={bck}>Back to page</button>
      </center>

      <Mycmd />
     
      </>
    )
  };
  
  export default NoPage;