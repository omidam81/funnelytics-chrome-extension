import React, { useState } from 'react';
import {sortMenuItems} from '../constants';
import ClickOutside from './Outside';

function SortMenu({ onClick }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <>
      <span className="sort" onClick={() => setShowMenu(!showMenu)}>
        Sort: {selected}
      </span>
      <ClickOutside onClickOutside={() => setShowMenu(false)}>
        {showMenu && (
          <ul className="sort-menu">
            {sortMenuItems.map((p, k) => (
              <li
                key={k}
                onClick={() => {
                  setSelected(p.label);
                  onClick(p.value);
                  setShowMenu(!showMenu);
                }}
              >
                <a href="#">{p.label}</a>
              </li>
            ))}
          </ul>
        )}
      </ClickOutside>
    </>
  );
}

export default SortMenu;
