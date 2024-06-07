import React, { useState } from 'react';

const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const data = [
    {
      title: 'Painel 1',
      content: 'Conteúdo do painel 1'
    },
    {
      title: 'Painel 2',
      content: 'Conteúdo do painel 2'
    },
    {
      title: 'Painel 3',
      content: 'Conteúdo do painel 3'
    }
  ];

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className={`accordion-item ${active === index && 'active'}`}>
          <button className="accordion-header" onClick={() => handleClick(index)}>
            {item.title}
          </button>
          <div className="accordion-content">
            {active === index && item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;