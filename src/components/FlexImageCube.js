import React from "react";
import style from "../styles/FlexImageCube.css"
const FlexImageCube = () => {
  return (
    <div className="container">
    <div className="bg1">
    <h2 id="h21">
        اقتصاد
      </h2>
      <button className="but1">المزيد</button>
    </div>
    <div className="bg2">
    <h2 id="h22">
        رياضة
      </h2>
      <button className="but1">المزيد</button>
    </div>
    <div className="bg3">
    <h2 id="h23">
         فيديو وصور
      </h2>
      <button className="but2">المزيد</button>
    </div>
    <div className="bg4">
    <h2 id="h24">
        ثقافة
      </h2>
      <button className="but2">المزيد</button>
    </div>
    <div className="bg5">
    <h2 id="h25">
        أخبار
      </h2>
      <button id="but3">المزيد</button>
    </div>
    
  </div>
  );   
};

export default FlexImageCube;