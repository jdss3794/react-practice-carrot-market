import React from 'react';
import './../style/container.css';

const Main = () => {
  return (
    <div className='container'>
      <div id='viewArea'>
        <h2>메인영역</h2>
        <img
          src='https://via.placeholder.com/1690x700.png'
          className='main-banner'
        />
        <img
          src='https://via.placeholder.com/1690x700.png'
          className='main-banner'
        />
        <img
          src='https://via.placeholder.com/1690x700.png'
          className='main-banner'
        />
        <img
          src='https://via.placeholder.com/1690x700.png'
          className='main-banner'
        />
        <h3>중고거래 인기매물</h3>

        <h4>중고거래 인기검색어</h4>
        <ul className='hot-search'>
          <li>
            <a href=''>포켓몬빵</a>
          </li>
          <li>
            <a href=''>자전거</a>
          </li>
          <li>
            <a href=''>의자</a>
          </li>
          <li>
            <a href=''>냉장고</a>
          </li>
          <li>
            <a href=''>캠핑</a>
          </li>
          <li>
            <a href=''>아이패드</a>
          </li>
          <li>
            <a href=''>아이폰</a>
          </li>
          <li>
            <a href=''>노트북</a>
          </li>
          <li>
            <a href=''>알바</a>
          </li>
          <li>
            <a href=''>오토바이</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
