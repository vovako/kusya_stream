import React, { forwardRef, useState } from 'react';
import Search from '../Search/Search'
import favorListIcon from '/src/assets/favor-list.svg'
import mainIcon from '/src/assets/main.svg'
import searchIcon from '/src/assets/search.svg'
import crossIcon from '/src/assets/cross.svg'
import UserDetails from '../UserDetails/UserDetails';
import './mobile-menu.scss'

const MobileMenu = forwardRef(({ toggleDialog, searchValue, setSearchValue, userName, onClickFavoritListBtn, 
	setSearchDescr, onClickExitUser, userDetailsIsActive, setUserDetailsIsActive, onClickLoginBtn }, ref) => {
	const [searchIsActive, setSearchIsActive] = useState(false)

	function backdropHandler(evt) {
		if (evt.target !== ref.current) return

		setSearchIsActive(false)
		setUserDetailsIsActive(false)
	}

	function closeMenu() {
		toggleDialog()
		setSearchIsActive(false)
		setUserDetailsIsActive(false)
		setSearchValue('')
	}

	function onCloseMenu() {
		closeMenu()
	}

	function onClickSearchBtn() {
		setSearchIsActive(true)
		setUserDetailsIsActive(false)
	}

	function onSubmitSearch() {
		setSearchDescr(searchValue)
		closeMenu()
	}

	function onClickUserDetails() {
		setSearchIsActive(false)
		setUserDetailsIsActive(!userDetailsIsActive)
	}

	function onClickMain() {
		setSearchDescr('')
		closeMenu()
	}

	function onClickExit() {
		onClickExitUser()
		setUserDetailsIsActive(false)
	}

	return (
		<dialog ref={ref} className='menu-dialog' onClick={backdropHandler}>
			<button onClick={onCloseMenu} className='menu-dialog__close-btn'>
				<img src={crossIcon} alt="" />
			</button>
			<div className="menu-dialog__list">
				<UserDetails userName={userName} onClickExit={onClickExit} onClickUserDetails={onClickUserDetails} userDetailsIsActive={userDetailsIsActive} onClickLoginBtn={onClickLoginBtn}/>
				<button onClick={onClickFavoritListBtn} className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={favorListIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Избранное</div>
				</button>
				<button onClick={onClickMain} className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={mainIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Главная</div>
				</button>
				<div className="menu-dialog__search">
					<button onClick={onClickSearchBtn} className={searchIsActive ? 'menu-dialog-item invisible' : 'menu-dialog-item'}>
						<div className="menu-dialog-item__image">
							<img src={searchIcon} alt="" />
						</div>
						<div className="menu-dialog-item__title">Поиск радио</div>
					</button>
					<Search value={searchValue} setValue={setSearchValue} isActive={searchIsActive} onSubmitSearch={onSubmitSearch} />
				</div>
			</div>
		</dialog>
	);
})

export default MobileMenu;