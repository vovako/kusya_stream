import React, { forwardRef, useState } from 'react';
import Search from '../Search/Search'
import userIcon from '/src/assets/user.svg'
import favorListIcon from '/src/assets/favor-list.svg'
import mainIcon from '/src/assets/main.svg'
import searchIcon from '/src/assets/search.svg'
import arrowIcon from '/src/assets/arrow-bottom.svg'
import crossIcon from '/src/assets/cross.svg'
import './mobile-menu.scss'

const MobileMenu = forwardRef(({ toggleDialog, searchValue, setSearchValue }, ref) => {
	const [searchIsActive, setSearchIsActive] = useState(false)
	const [userDetailsIsActive, setUserDetailsIsActive] = useState(false)

	function backdropHandler(evt) {
		if (evt.target !== ref.current) return

		setSearchIsActive(false)
		setUserDetailsIsActive(false)
	}

	function onCloseMenu() {
		toggleDialog()
		setSearchIsActive(false)
		setUserDetailsIsActive(false)
	}

	function onClickSearchBtn() {
		setSearchIsActive(true)
		setUserDetailsIsActive(false)
	}
	function onClickUserDetails() {
		setSearchIsActive(false)
		setUserDetailsIsActive(!userDetailsIsActive)
	}

	return (
		<dialog ref={ref} className='menu-dialog' onClick={backdropHandler}>
			<button onClick={onCloseMenu} className='menu-dialog__close-btn'>
				<img src={crossIcon} alt="" />
			</button>
			<div className="menu-dialog__list">
				<div className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={userIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Во77</div>
					<div className="user-details">
						<button onClick={onClickUserDetails}
							className={userDetailsIsActive ? 'user-details__btn active' : 'user-details__btn'}>
							<img src={arrowIcon} alt="" />
						</button>
						<div className="user-details__list">
							<button className="user-details__item">Выйти</button>
						</div>
					</div>
				</div>
				<button className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={favorListIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Избранное</div>
				</button>
				<button className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={mainIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Главная</div>
				</button>
				<div className="menu-dialog__search">
					{searchIsActive && (
						<Search value={searchValue} setValue={setSearchValue} />
					)}
					<button onClick={onClickSearchBtn} className={searchIsActive ? 'menu-dialog-item invisible' : 'menu-dialog-item'}>
						<div className="menu-dialog-item__image">
							<img src={searchIcon} alt="" />
						</div>
						<div className="menu-dialog-item__title">Поиск радио</div>
					</button>
				</div>
			</div>
		</dialog>
	);
})

export default MobileMenu;