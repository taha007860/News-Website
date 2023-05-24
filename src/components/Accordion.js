import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Data } from './Data';

const Accordion = () => {
  const [clicked, setClicked] = useState(null);
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
    setSelected(index);
  };

  return (
    <div style={Container}>
      <h1 style={{ textAlign: 'right', color: 'green', marginTop: '5%' }}>: الأكثر قراءة</h1>
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
              <div style={Dropdown}>
                <p style={pStyles}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
      <img
        src={"https://www.neelwafurat.com/images/lb/abookstore/covers/normal/292/292771.jpg"}
        alt="Your Image"
        style={ImageStyle}
      />
    </div>
  );
};

const AccordionSection = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '150vh',
    background: '#fff',
    top: "-180px",
    bottom: "120px"
  };
  
  const Container = {
    position: 'relative',
    top: '10%',
    boxShadow: '2px 10px 35px 1px rgba(153, 153, 153, 0)',
    width: '50%',
    left: '6%'
  };
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
  
  const spanStyles = {
    marginRight: '1.5 em',
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
  
  const Dropdown = {
    background: '#ccc',
    color: '#333', // Change the color to dark grey
    width: '100%',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #00ffb9',
    borderTop: '1px solid #00ffb9',
    textAlign: 'right'
    };
  const ImageStyle = {
    width: '55%', // Adjust the width as needed
    marginLeft: '120%', // Adjust the margin as needed
    marginTop: '-72%',
    height: '400px',
    marginBottom: '5%'
  };
  
  const pStyles = {
    fontSize: '2rem',
    marginRight: '8px'
  };

export default Accordion;