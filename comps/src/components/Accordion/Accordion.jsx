// import React from 'react';
import './Accordion.css';
import { useState } from 'react';

export default function Accordion({ accordionItems }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = accordionItems.map((item, index) => {
      const isExpanded = index === expandedIndex;
      return (
        <div key={item.id}>
          <div onClick={() => setExpandedIndex(index)}>
            {item.label}
          </div>
          {isExpanded && <div> {item.content}</div>}
        </div>
      )
  })


  return <div>{renderedItems}</div>;
}
