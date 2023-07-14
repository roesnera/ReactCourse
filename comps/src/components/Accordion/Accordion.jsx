// import React from 'react';
import './Accordion.css';
import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function Accordion({ accordionItems }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function handleClick(index) {
    // this function will use the actual most up to date value for the expanded index
    // this will prevent any bugs from programmatic site interaction that queues changes to state
    // faster than the React DOM actually updates the real dom
    // curent index is the live value of expanded index regardless of rendering
    // whereas you could say that index is the stale value of expanded index
    // this function will update expanded index to -1 if the live value is the same as the value passed in
    // otherwise it will update expanded index to the new value
    setExpandedIndex((currentIndex)=>{
      if(currentIndex===index) return -1;
      else return index;
    });
  }

  const renderedItems = accordionItems.map((item, index) => {
      const isExpanded = index === expandedIndex;

      const icon = (
        <span>{isExpanded? <GoChevronDown />: <GoChevronLeft />}</span>
      )

      return (
        <div key={item.id}>
          <div onClick={() => handleClick(index)} className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'>
            {item.label}
            {icon}
          </div>
          {isExpanded && <div className='border-b p-5'> {item.content}</div>}
        </div>
      )
  })


  return <div className='border-x border-t rounded'>{renderedItems}</div>;
}
