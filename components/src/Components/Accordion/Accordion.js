import React, { useState } from 'react';
import { AccordionWrapper } from './AccordionStyled';
import accordionData from './AccordionData';
import { Link } from 'react-router-dom';

const Accordion = () => {
    // How to handle toggle of accordion
    const [isClicked,setIsClicked] = useState(null);

    const handleIsClicked = (id)=>{
        if(isClicked === id){
             setIsClicked(null);
        }
        setIsClicked(id);
    }
  return (
    <>
    <section className='section'>
    <Link to='/'><button>Back</button></Link>

        <AccordionWrapper>
            {
                accordionData.map((currValue)=>{
                    const {id,title,content} = currValue;
                    return( 
                        <div className="accordion_item" key={id}>

                        {/*===== Accordion-title =====*/}
                        <div
                            className={`accordion_title ${isClicked === id ? 'active' : ''}`}
                            onClick={() => handleIsClicked(id)}
                        >
                            <h2>{title}</h2>
                            <div className="toggle_icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        {/* ===== Accordion-content ===== */}
                        <div className="accordion_content">
                            <p>{content}</p>
                        </div>

                    </div>
                    );
                })
            }
        </AccordionWrapper>
    </section>
    </>
  )
}

export default Accordion