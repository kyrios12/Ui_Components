import React, { useState } from 'react';
import accordionData from './AccordionData';
import './AccordionPrac.css';   

// id: 3,
// title: "What are the components in React?",
// content: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately."

const AccordionPrac = () => {
    const [isClicked,setIsClicked] = useState(null);

    const handleClick = (id)=>{
        if(isClicked === id){
             setIsClicked(null);
        }
        setIsClicked(id);
    }
    // For toggling we need a state variable
  return (
    <div className='accordion'>
     {accordionData.map((item)=>{
        const {id,title,content} = item;
       return <div> 
       <div className='accordion_item' key={id}>

        <div className={`accordion_title ${isClicked===id ? 'active' : ''}`} onClick={()=>handleClick(id)}>
        <h2>{title}</h2>
        <div className='toggle_icon'>
            <span></span>
            <span></span>
        </div>
        </div>

        <div className='accordion_content'>
        <p>{content}</p>
        </div>
       </div>
       </div>
     })}
    </div>
  )
}

export default AccordionPrac