import React from "react";
import style from "../styles/FlexImageCube.css"
const FlexImageCube = () => {
  return (
    <div className="container">
    <div className="bg1">
    <h2 style={{color: "red", marginLeft: "150px", marginTop: "90px"}}>
        اقتصاد
      </h2>
      <button style={{marginLeft: "180px", backgroundColor: "green", borderRadius: "10px", border: "none", width: '60px', height: '20px', color: 'white'}}>المزيد</button>
    </div>
    <div className="bg2">
    <h2 style={{color: "red", marginLeft: "140px", marginTop: "90px"}}>
        رياضة
      </h2>
      <button style={{marginLeft: "180px", backgroundColor: "green", borderRadius: "10px", border: "none", width: '60px', height: '20px', color: 'white'}}>المزيد</button>
    </div>
    <div className="bg3">
    <h2 style={{color: "red", marginLeft: "150px", marginTop: "40px"}}>
         فيديو وصور
      </h2>
      <button style={{marginLeft: "180px", backgroundColor: "green", borderRadius: "10px", border: "none", width: '60px', height: '20px', color: 'white'}}>المزيد</button>
    </div>
    <div className="bg4">
    <h2 style={{color: "red", marginLeft: "180px", marginTop: "100px"}}>
        ثقافة
      </h2>
      <button style={{marginLeft: "180px", backgroundColor: "green", borderRadius: "10px", border: "none", width: '60px', height: '20px', color: 'white'}}>المزيد</button>
    </div>
    <div className="bg5">
    <h2 style={{color: "red", marginLeft: "440px", marginTop: "315px"}}>
        أخبار
      </h2>
      <button style={{marginLeft: "445px", backgroundColor: "green", borderRadius: "10px", border: "none", width: '60px', height: '20px', color: 'white'}}>المزيد</button>
    </div>
    
  </div>
  );   
};

export default FlexImageCube;