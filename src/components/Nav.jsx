import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const navList = [
    { content: '중고거래', href: '/' },
    { content: '알바', href: 'cardList' },
    /*     { content: 'Notice', href: 'notice' },
    { content: 'Event', href: 'event' },
    { content: 'EventToggle', href: 'eventToggle' }, */
  ];
  return (
    <div id='nav'>
      <h2 className='blind'>메인 메뉴</h2>
      <ul>
        {navList.map((element, index) => {
          return (
            <li key={index}>
              <NavLink
                to={element.href}
                className={({ isActive }) =>
                  isActive ? 'navList on' : 'navList'
                }
              >
                {element.content}
              </NavLink>
            </li>
          );
        })}
        <div className='header-right'>
          <input
            className='search-bar'
            placeholder='물품이나 동네를 검색해보세요'
          />
          <button className='dg-chat'>당근채팅</button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
