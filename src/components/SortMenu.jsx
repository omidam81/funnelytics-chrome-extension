import React, { useState } from 'react';
const menuItems = [
  { label: 'Date Created', value: 'DATE_CREATED' },
  { label: 'Alphabetical (A-Z)', value: 'ALPHA_ASC' },
  { label: 'Alphabetical (Z-A)', value: 'ALPHA_DES' },
  { label: 'Triggered (Low - High)', value: 'TRIGGER_ASC' },
  { label: 'Triggered (High - Low)', value: 'TRIGGER_DES' }
];
function SortMenu({ onClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <>
      <span className="sort" onClick={() => setShowMenu(!showMenu)}>
        Sort: {selected}
      </span>
      {showMenu && (
        <ul className="sort-menu">
          {menuItems.map((p, k) => (
            <li key={k} onClick={() => {
              setSelected(p.label);
              onClick(p.value)
            }}>
              <a href="#">{p.label}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SortMenu;
