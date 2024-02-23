import { useRef } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'
import userIcon from './assets/user.svg'
import favorListIcon from './assets/favor-list.svg'
import mainIcon from './assets/main.svg'
import searchIcon from './assets/search.svg'
import arrowIcon from './assets/arrow-bottom.svg'
import crossIcon from './assets/cross.svg'

export default function App() {
	const dialogRef = useRef(null);

	function toggleDialog() {
		if (!dialogRef.current) return;

		dialogRef.current.hasAttribute('open') ? dialogRef.current.close() : dialogRef.current.showModal();
	}

	return (
		<>
			<Header onMenuClick={toggleDialog} />
			<main className="main">
				<div className="main__body">
					<div className="main__search-msg">
						Ничего не найдено по запросу “Радио energy”
					</div>
					<RadioList />
				</div>
			</main>
			<Player />
			<dialog ref={dialogRef} open className='menu-dialog'>
				<button onClick={toggleDialog} className='menu-dialog__close-btn'>
					<img src={crossIcon} alt="" />
				</button>
				<div className="menu-dialog__list">
					<button className="menu-dialog-item">
						<div className="menu-dialog-item__image">
							<img src={userIcon} alt="" />
						</div>
						<div className="menu-dialog-item__title">Володя777</div>
						<button className="user-details-btn">
							<img src={arrowIcon} alt="" />
						</button>
					</button>
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
					<button className="menu-dialog-item">
						<div className="menu-dialog-item__image">
							<img src={searchIcon} alt="" />
						</div>
						<div className="menu-dialog-item__title">Поиск радио</div>
					</button>
				</div>
			</dialog>
		</>
	)
}