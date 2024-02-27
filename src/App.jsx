import { useMemo, useRef, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'
import MobileMenu from './components/MobileMenu/MobileMenu'
import { LoginModal } from './components/Modal/Modal'

export default function App() {
	const radioList = [
		{
			id: 1,
			title: 'Русская Волна',
			media: 'https://rp.amgradio.ru/RuWave48',
			image: 'https://radiopotok.ru/f/station/512/1543.png'
		},
		{
			id: 2,
			title: 'Русское радио',
			media: 'https://rusradio.hostingradio.ru/rusradio128.mp3',
			image: 'https://radiopotok.ru/f/station_webp/512/85.webp'
		},
	]


	const mobileMenuRef = useRef(null);
	const loginModalRef = useRef(null);
	const regModalRef = useRef(null);

	const [loginTitle, setLoginTitle] = useState(null)
	const [searchValue, setSearchValue] = useState('')
	const [userInfo, setUserInfo] = useState({
		name: null,
		favorites: []
	})
	const [playingId, setPlayingId] = useState(radioList[0].id)
	const [soundInfo, setSoundInfo] = useState()

	const getSoundInfo = useMemo(async (id) => {
		// const resp = await fetch('')
		// return resp.json()
		const info = {
			soundName: 'Яблоки на снегу',
			author: 'Николай Баскет',
			radioName: radioList.filter(r => r.id === id),
		}
		console.log(info);
		setSoundInfo(info)
	}, [playingId])


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
					<RadioList radioArray={radioList} playingId={playingId} setPlayingId={setPlayingId} getSoundInfo={getSoundInfo} />
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