import React from 'react';
import menuImg from './menu.svg'
import './header.scss'

export default function Header({ onMenuClick, children }) {
	return (
		<header className="header">
			<div className="logo">RadioVibe</div>
			<button onClick={onMenuClick} className="menu-btn">
				<img src={menuImg} alt="" />
			</button>
			{children}
		</header>
	);
}