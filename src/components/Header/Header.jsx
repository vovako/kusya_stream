import React from 'react';
import menuImg from './menu.svg'
import './header.scss'

export default function Header({ onMenuClick }) {
	return (
		<header className="header">
			<div className="logo">КусяЭфир</div>
			<button onClick={onMenuClick} className="menu-btn">
				<img src={menuImg} alt="" />
			</button>
		</header>
	);
}