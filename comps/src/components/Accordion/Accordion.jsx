// import React from 'react';
import './Accordion.css';

export default function Accordion({ accordionItems }) {
  return <div>{accordionItems.map((item) => {
    return (
      <div key={item.id}>
          <div>{item.label}</div>
          <div>{item.content}</div>
      </div>
    )
  })}</div>;
}
