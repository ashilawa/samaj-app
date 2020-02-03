import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu/lib/menus/slide';

import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005; Close</div> 
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776; Menu</div> 
            </li>
          )}
        </ul>
      </nav>
      <Menu right isOpen={open} width={"70%"}>
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <Link to={l.path} onClick={() => setOpen(!open)}>
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default Hamburger;
