import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from './Data';
import '../styles/Accordion.css';
const Accordion = () => {
  const [clicked, setClicked] = useState(null);
  const [selected, setSelected] = useState(null);
  const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
  const mediaQueryTablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
  const mediaQueryXTablet = window.matchMedia('(min-width: 1025px) and (max-width: 1224px)');
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
    setSelected(index);
  };

  return (
    <div style={mediaQueryMobile.matches ? ContainerMobile: ContainerWeb}>
      <h1 id="h1">: الأكثر قراءة</h1>
      {Data.map((item, index) => {
        const isLastQuestion = index === Data.length - 1 && clicked === null;
        const questionContainerStyle = isLastQuestion
          ? { ...QuestionContainer, height: '128px' }
          : QuestionContainer;
         const wrapStyle = isLastQuestion
         ? { ...Wrap, marginTop: '-15px' } // Adjust the margin to move the item up
          : Wrap;

        return (
          <div key={index} style={questionContainerStyle}>
            <div style={clicked === index ? { ...wrapStyle, background: '#000' } : wrapStyle} onClick={() => toggle(index)}>
              <h1 style={clicked === index ? { ...headingStyles, color: 'white' } : headingStyles}>
                {item.question}
              </h1>
              <button
                style={clicked === index ? { ...buttonStyles, backgroundColor: 'red', height: '9rem' } : buttonStyles}
              >
                {clicked === index ? <FiMinus /> : <FiPlus />}
              </button>
            </div>
            {clicked === index && (
              <div id="dropdown">
                <p style={mediaQueryMobile.matches ? pStylesMobile : pStylesWeb}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
      <img
        src={"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/292/292771.jpg"}
        alt="Your Image"
        id="imageS"
        style={mediaQueryMobile.matches ? ImageStyleMobile : mediaQueryTablet.matches ? ImageStyleTablet : mediaQueryXTablet.matches ? ImageStyleXTablet : ImageStyleWeb}
      />
    </div>
  );
};
  const Container = {
    position: 'relative',
    top: '10%',
    boxShadow: '2px 10px 35px 1px rgba(153, 153, 153, 0)',
    width: '50%',
    left: '6%'
  };
  const ContainerWeb = {
    ...Container
  }
  const ContainerMobile = {
    ...Container,
    marginTop: '-90px'

  }
  const QuestionContainer = {
    border: '1px solid #00ffb9',
    marginTop: '1rem',
    marginBottom: '0',
    borderRadius: '10px',
    overflow: 'hidden'
  };
  const Wrap = {
    background: '#fff',
    color: 'green',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    justifyContent: 'flex-end', // Align question to the right
  };
  
  const headingStyles = {
    padding: '2rem',
    fontSize: '2rem',
  };
  const buttonStyles = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '9rem'
  };
  const ImageStyle = {
    width: '55%', // Adjust the width as needed
    marginLeft: '120%', // Adjust the margin as needed
    marginTop: '-72%',
    height: '400px',
    marginBottom: '5%'
  };
  const ImageStyleWeb = {
    ...ImageStyle
  }
  const ImageStyleXTablet = {
    ...ImageStyle,
    marginTop: '-600px',
    height: '430px'
  }
  const ImageStyleMobile = {
    ...ImageStyle,
    marginTop: '-800px',
    height: '450px',
    width: '120px',
    marginLeft: '300px'
  }
  const ImageStyleTablet = {
    ...ImageStyle,
    marginTop: '-800px',
    height: '450px'
  }
  const pStyles = {
    fontSize: '1.5rem',
    marginRight: '8px'
  };
  const pStylesMobile = {
    ...pStyles,
    fontSize: '16px',
  };
  
  const pStylesWeb = {
    ...pStyles,
  };

export default Accordion;