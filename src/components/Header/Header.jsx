import React from 'react';
import menuImg from './menu.svg'
import './header.scss'

export default function Header() {
	return (
		<header className="header">
			<div className="logo">КусяЭфир</div>
			<button className="menu-btn">
				<img src={menuImg} alt="" />
			</button>
		</header>
	);
}