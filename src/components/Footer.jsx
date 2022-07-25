import React from 'react';
import '../style/footer.css';
import { NavLink } from 'react-router-dom';

const Footer = ({ title }) => {
  const fncActive = ({ isActive }) => {
    return isActive ? 'on' : '';
  };
  return (
    <footer id='footer'>
      <div className='company-info'>
        {/*         <ul>
          <li>
            <NavLink to='/manual' className={fncActive}>
              이용약관
            </NavLink>
          </li>
          <li>
            <NavLink to='/policy' className={fncActive}>
              개인정보처리방침
            </NavLink>
          </li>
          <li>
            <NavLink to='/rule' className={fncActive}>
              회사개요
            </NavLink>
          </li>
          <li>
            <NavLink to='/etcInfo' className={fncActive}>
              기타정보
            </NavLink>
          </li>
        </ul> */}
        <ul className='footer-list'>
          <li>{title}</li>
        </ul>
        <ul className='footer-list'>
          <li>믿을 수 있는 중고거래</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className='footer-list'>
          <li>광고주센터</li>
          <li>당근페이</li>
          <li>동네가게</li>
        </ul>
        <ul className='footer-list'>
          <li>회사 소개</li>
          <li>채용</li>
        </ul>
        <ul className='footer-list'>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>위치기반서비스 이용약관</li>
          <li>이용자보호 비전과 계획</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
