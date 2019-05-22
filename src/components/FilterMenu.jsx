import React, { useState } from 'react';
import { filterMenuItems } from '../constants';
import ClickOutside from './Outside';

function FilterMenu({ onClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <>
      <span className="filter" onClick={() => setShowMenu(!showMenu)}>
        Filter
        {selected === '' || selected === 'Clear' ? `` : ` By ${selected}`}
      </span>
      <ClickOutside onClickOutside={() => setShowMenu(false)}>
        {showMenu && (
          <ul className="filter-menu">
            {filterMenuItems.map((p, k) => (
              <li
                key={k}
                onClick={() => {
                  setSelected(p.label);
                  onClick(p.value);
                  setShowMenu(!showMenu);
                }}
              >
                <a>{p.label}</a>
              </li>
            ))}
          </ul>
        )}
      </ClickOutside>
    </>
  );
}

export default FilterMenu;
