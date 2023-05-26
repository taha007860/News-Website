import React, { useState, useEffect } from "react";
import '../styles/MainNewsCarousel.css';
import BurgerMenu from "./BurgerMenu";
const slideStyles = {
 width: "100%",
 height: "100%",
 borderRadius: "0px",
 backgroundSize: "cover",
 backgroundPosition: "center",
};
const MainNewsCarousel = () => {
  const images = [
    {
      url: "https://yt3.ggpht.com/a/AATXAJysbcJbKH22uawe946svPAhQ_5R17z-kUwlQg=s900-c-k-c0xffffffff-no-rj-mo",
      caption: "This is a picture of a cat",
    },
    {
      url: "https://ylplebanon.org/wp-content/uploads/2020/02/UNDP-YLP-Partner-Injaz.png",
      caption: "This is a picture of a dog",
    },
    {
      url: "https://1.bp.blogspot.com/-TheggcuV4WY/YQA4t6LBzVI/AAAAAAAAVzk/_VrN_sKlm-ENI_9z5kct5Rha0-uCEWu4wCLcBGAsYHQ/w400-h225/LinkedIn%2BReactJS%2BAssessment.jpg",
      caption: "This is a picture of a bird",
    },
    {
      url: "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png",
      caption: "This is a picture of a fish",
    },
    {
      url: "https://pixy.org/src/477/4774988.jpg",
      caption: "This is a picture of a tree",
    },
  ];
 const [currentIndex, setCurrentIndex] = useState(0);
 const slides = [
 { url: "https://cdn.elwatannews.com/watan/840x473/19833015551537649934.jpg", title: "beach" },
 { url: "https://rassd.com/wp-content/uploads/201832938607.jpg", title: "boat" },
 { url: "https://www.alriyadh.com/media/article/2015/07/15/img/379464901052.jpg", title: "forest" },
 { url: "https://www.harmoon.org/wp-content/uploads/2020/03/Twitter-1.jpg", title: "city" }
 ];
 const slideStylesWidthBackground = {
 ...slideStyles,
 backgroundImage: `url(${slides[currentIndex].url})`,
 };
 
 useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change theinterval time here to set the duration between slide transitions
    return () => clearInterval(interval);
  }, [currentIndex]);

 const goToNext = () => {
 const isLastSlide = currentIndex === slides.length - 1;
 const newIndex = isLastSlide ? 0 : currentIndex + 1;
 setCurrentIndex(newIndex);
 };

 const goToSlide = (slideIndex) => {
 setCurrentIndex(slideIndex);
 };
  return (
    <div id="slider">
     <div id="menuS">
      <div className="menu">آراء</div>
      <div className="divider" />
      <div className="menu">فيديو وصور</div>
      <div className="divider" />
      <div className="menu">ثقافة</div>
      <div className="divider" />
      <div className="menu">رياضة</div>
      <div className="divider" />
      <div className="menu">اقتصاد</div>
      <div className="divider" />
      <div className="menu">أخبار</div>
      <div className="divider" />
      <div className="menu">الرئيسية</div>
    </div>
    <div style={slideStylesWidthBackground}></div>
 <div id="dotsC">
 {slides.map((slide, slideIndex) => (
 <div id="dot"
 key={slideIndex}
 onClick={() => goToSlide(slideIndex)}
 >
 ●
 </div>
 ))}
 </div>
 <div id="textD">
  <h1>خلافا للاعتقاد</h1>
  <div className="horizontalDivider" />
  <p>لوريم ايبسوم ليس نصا عشوائيا، بل ان له جذور في الادب الكلاسيكي اللاتيني منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 في القدم</p>
 </div>
 </div>
 );
}
export default MainNewsCarousel;