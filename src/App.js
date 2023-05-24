import './App.css';
import MainNewsCarousel from './components/MainNewsCarousel';
import HomepageBackground from './components/HomepageBackground';
import FlexImageCube from './components/FlexImageCube';
import Footer from './components/Footer';
import Accordion from './components/Accordion';
function App() {
  const slides = [
    { url: "https://yt3.ggpht.com/a/AATXAJysbcJbKH22uawe946svPAhQ_5R17z-kUwlQg=s900-c-k-c0xffffffff-no-rj-mo", title: "beach" },
    { url: "https://ylplebanon.org/wp-content/uploads/2020/02/UNDP-YLP-Partner-Injaz.png", title: "boat" },
    { url: "https://1.bp.blogspot.com/-TheggcuV4WY/YQA4t6LBzVI/AAAAAAAAVzk/_VrN_sKlm-ENI_9z5kct5Rha0-uCEWu4wCLcBGAsYHQ/w400-h225/LinkedIn%2BReactJS%2BAssessment.jpg", title: "forest" },
    { url: "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png", title: "city" }
    ];
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
  const containerStyles = {
    width: "80%",
    height: "23em",
    margin: "22% auto 10% auto",
    position: "static",
    top: "180px",
    left: "125px"
  
  };
  return (
    <div className="App">
      <HomepageBackground />
      <div style={containerStyles}>
        <p style={{color: 'black'}}>تسجيل الدخول</p>
      <MainNewsCarousel slides={slides} />
      </div>
  <div>
  <FlexImageCube images={images} />
  </div>
  <div>
    <Accordion />
  </div>
  <div style={{marginTop: '55px', marginRight: '25px', marginLeft: '25px', marginTop: '34px'}}>
    <Footer />
    </div>
    <h5 style={{color:'green', textAlign:'center', marginTop: '10px'}}>Copyright | website</h5>
    </div>
  );
}

export default App;
