import { useRef, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'
import MobileMenu from './components/MobileMenu/MobileMenu'

export default function App() {
	const dialogRef = useRef(null);
	const [searchValue, setSearchValue] = useState('')

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
			<MobileMenu ref={dialogRef} toggleDialog={toggleDialog} searchValue={searchValue} setSearchValue={setSearchValue} />
		</>
	)
}