import { useRef, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'
import MobileMenu from './components/MobileMenu/MobileMenu'
import { LoginModal } from './components/Modal/Modal'

export default function App() {
	const mobileMenuRef = useRef(null);
	const loginModalRef = useRef(null);
	const regModalRef = useRef(null);
	const [loginTitle, setLoginTitle] = useState(null)
	const [searchValue, setSearchValue] = useState('')
	const [userInfo, setUserInfo] = useState({
		name: null,
		favorites: []
	})

	function toggleDialog(ref) {
		if (!ref.current) return;

		ref.current.hasAttribute('open') ? ref.current.close() : ref.current.showModal();
	}

	function onClickLoginBtn() {
		setLoginTitle(null)
		toggleDialog(loginModalRef)
	}

	function onClickFavoritListBtn() {
		setLoginTitle('Для добавления в избранное, необходимо авторизоваться')
		toggleDialog(loginModalRef)
	}

	return (
		<>
			<Header onMenuClick={() => toggleDialog(mobileMenuRef)} />
			<main className="main">
				<div className="main__body">
					<div className="main__search-msg">
						Ничего не найдено по запросу “Радио energy”
					</div>
					<RadioList />
				</div>
			</main>
			<Player />
			<MobileMenu ref={mobileMenuRef}
				toggleDialog={() => toggleDialog(mobileMenuRef)}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				userName={userInfo.name}
				onClickLoginBtn={onClickLoginBtn}
				onClickFavoritListBtn={onClickFavoritListBtn} />
			<LoginModal title={loginTitle}
				modalRef={loginModalRef}
				regModalRef={regModalRef}
				toggleDialog={toggleDialog} />
		</>
	)
}