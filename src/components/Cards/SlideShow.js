import React from 'react'
import {Jumbotron,Container as c }  from "react-bootstrap";
export default function SlideShow() {
    return (<div>
        <Jumbotron fluid style={{backgroundColor:"#fff",borderRadius: "25px",border: "2px solid whitesmoke"}}>
  <c>
    <h1 style={{color: "#black  ",
  fontsize: "100px",
  margintop: "-100px"}}>Why Cooperative ?</h1>
    <p style ={{position:"relative",fontSize:"25px",textAlign:"center"}}>
      Have you ever had trouble describing something to team members during a conference call?
       Conference calls should eliminate communication barriers, not the other way around. With whiteboard and text editor added to your arsenal of premium conference calling tools, your meetings are sure to be more productive than ever before.
    </p>
  
  </c>
</Jumbotron>



</div>
    )
}
