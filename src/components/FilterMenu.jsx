import React, { useState } from 'react';
const menuItems = [
  { label: 'Clear', value: 'clear' },
  { label: 'Button Click', value: 'click' },
  { label: 'Form Submission', value: 'submit' },
  { label: 'Product Purchase', value: 'purchase' },
  { label: 'Video Play', value: 'play' }
];

function FilterMenu({ onClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <>
      <span className="filter" onClick={() => setShowMenu(!showMenu)}>
        Filter{selected === '' || selected === 'Clear' ? `` : ` By ${selected}`}
      </span>
      {showMenu && (
        <ul className="filter-menu">
          {menuItems.map((p, k) => (
            <li
              key={k}
              onClick={() => {
                setSelected(p.label);
                onClick(p.value);
              }}
            >
              <a href="#">{p.label}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FilterMenu;
