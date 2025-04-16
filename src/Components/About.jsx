import React, {useState}from 'react'

export default function About() {
    const[mystyle,setstyle]=useState({
        backgroundColor:"black",
        color:"white"
    });
    const [btntext,setbtntext]=useState("Enable light mode");
   const toggleStyle=()=>{
        if(mystyle.color==="white"){
            setstyle({
                backgroundColor:"white",
                color:"black",
                border:"1px solid black"
            })
            setbtntext("Enable dark mode");
        }else{
            setstyle({
                backgroundColor:"black",
                color:"white",
                border:"1px solid white"
            })
            setbtntext("Enable light mode");
        }
    }
 
  return (
    <div style={{
        colr:"red",
        backgroundColor:"#63BA97",
        height:"100vh",
        textAlign:"center"
    }}>
        <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <button type="button" onClick={toggleStyle} className="btn btn-secondary my-4">{btntext}</button> */}
<div className="form-check form-switch"  onClick={toggleStyle}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" for="switchCheckDefault">{btntext}</label>
</div>
    </div>
  )
}
