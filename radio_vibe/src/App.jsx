import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'
import MobileMenu from './components/MobileMenu/MobileMenu'
import { LoginModal } from './components/Modal/Modal'
import Sidebar from './components/Sidebar/Sidebar'
import UserDetails from './components/UserDetails/UserDetails'

export default function App() {
	const radioList = [
		{
			id: 1,
			title: 'Русская Волна',
			audio: 'https://rp.amgradio.ru/RuWave48',
			image: 'https://radiopotok.ru/f/station/512/1543.png'
		},
		{
			id: 2,
			title: 'Русское радио',
			audio: 'https://rusradio.hostingradio.ru/rusradio128.mp3',
			image: 'https://radiopotok.ru/f/station_webp/512/85.webp'
		},
		{
			id: 3,
			title: 'ENERGY (Энерджи)',
			audio: 'https://pub0201.101.ru/stream/air/aac/64/99',
			image: 'https://radiopotok.ru/f/station_webp/512/4.webp'
		},
		{
			id: 4,
			title: 'ТНТ MUSIC RADIO',
			audio: 'https://tntradio.hostingradio.ru:8027/tntradio128.mp3',
			image: 'https://radiopotok.ru/f/station_webp/512/1218.webp'
		},
		{
			id: 5,
			title: 'Радио TOP 100',
			audio: 'https://ic2.radiosignal.one/top100',
			image: 'https://radiopotok.ru/f/station_webp/512/1992.webp'
		},
		{
			id: 6,
			title: 'Русский Шторм',
			audio: 'https://live.rushtorm.pro:8000/128',
			image: 'https://radiopotok.ru/f/station_webp/512/2360.webp'
		},
		{
			id: 7,
			title: 'Маруся ФМ',
			audio: 'https://radio-holding.ru:9433/marusya_default',
			image: 'https://radiopotok.ru/f/station_webp/512/1323.webp'
		},
		{
			id: 8,
			title: 'Remix FM',
			audio: 'https://rmx.amgradio.ru/RemixFM',
			image: 'https://radiopotok.ru/f/station_webp/512/1901.webp'
		},
		{
			id: 9,
			title: 'екорд / Record',
			audio: 'https://radiorecord.hostingradio.ru/rr_main96.aacp',
			image: 'https://radiopotok.ru/f/station_webp/512/67.webp'
		},
		{
			id: 10,
			title: 'РУССКОЕ FM',
			audio: 'https://rufm.amgradio.ru/rufm',
			image: 'https://radiopotok.ru/f/station_webp/512/1175.webp'
		},
	]

	const apiOrigin = 'http://localhost:3000'

	const mobileMenuRef = useRef(null);
	const loginModalRef = useRef(null);
	const regModalRef = useRef(null);
	const audioRef = useRef(null)

	const [loginTitle, setLoginTitle] = useState(null)
	const [searchValue, setSearchValue] = useState('')
	const [searcDescr, setSearchDescr] = useState('')
	const [isPause, setIsPause] = useState(true)
	const [volume, setVolume] = useState(0.5);

	const [playingId, setPlayingId] = useState(null)
	const [radioName, setRadioName] = useState(null)
	const [soundName, setSoundName] = useState('Полное название текущего трека')
	const [soundAuthor, setSoundAuthor] = useState('Исполнитель')

	const [userName, setUserName] = useState(null)
	const [favorites, setFavorites] = useState([])

	const [userDetailsIsActive, setUserDetailsIsActive] = useState(false)

	useEffect(() => {
		const name = localStorage.getItem('user_name')
		const favor = localStorage.getItem('favorites')
		if (name === null || favor === null) return

		setUserName(name)
		setFavorites(JSON.parse(favor))
	}, [])

	useEffect(() => {
		if (playingId === null || !audioRef.current) return;

		const radioItem = radioList.filter(r => r.id === playingId)[0]

		setRadioName(radioItem.title)

		audioRef.current.src = radioItem.audio
		audioRef.current.load()
		audioRef.current.play()
		setIsPause(false)

	}, [playingId])

	useEffect(() => {
		audioRef.current.volume = volume
	}, [volume])

	function updateFavoritesInDB(radioId) {
		if (userName === null) {
			onClickFavoritListBtn()
			return
		}

		const favor = new Set(favorites)
		favor.has(radioId) ? favor.delete(radioId) : favor.add(radioId)
		const newFavor = Array.from(favor)
		setFavorites(newFavor)
		localStorage.setItem('favorites', JSON.stringify(newFavor))

		fetch(`${apiOrigin}/users/setFavorites`, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				favorites: JSON.stringify(newFavor),
				id: +localStorage.getItem('user_id')
			})
		})
	}


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

	function onClickPlayPauseBtn() {
		isPause ? audioRef.current.play() : audioRef.current.pause()
		setIsPause(!isPause);
	}

	function onClickExitUser() {
		localStorage.removeItem('user_name')
		localStorage.removeItem('favorites')
		localStorage.removeItem('user_id')
		setUserName(null)
		setFavorites([])
	}

	return (
		<>
			<Header onMenuClick={() => toggleDialog(mobileMenuRef)}>
				<Player isPause={isPause}
					onClickPlayPauseBtn={onClickPlayPauseBtn}
					radioName={radioName}
					soundAuthor={soundAuthor}
					soundName={soundName}
					setVolume={setVolume}
					isFavorite={favorites.includes(playingId)}
					volume={volume}
					onClickToggleFavorite={() => updateFavoritesInDB(playingId)} />
				<div className="header__user-details">
					<UserDetails userName={userName}
						onClickExit={onClickExitUser}
						onClickUserDetails={() => setUserDetailsIsActive(false)}
						userDetailsIsActive={userDetailsIsActive}
						onClickLoginBtn={onClickLoginBtn} />
				</div>
			</Header>
			<main className="main">
				<Sidebar searchValue={searchValue} setSearchValue={setSearchValue} setSearchDescr={setSearchDescr} onClickFavoritListBtn={onClickFavoritListBtn} />
				<div className="main__body">
					<div className="main__search-msg">{searcDescr}</div>
					<RadioList radioArray={radioList} playingId={playingId} setPlayingId={setPlayingId} favorites={favorites} updateFavoritesInDB={updateFavoritesInDB} />
				</div>
			</main>
			<Player isPause={isPause}
				onClickPlayPauseBtn={onClickPlayPauseBtn}
				radioName={radioName}
				soundAuthor={soundAuthor}
				soundName={soundName}
				setVolume={setVolume}
				isFavorite={favorites.includes(playingId)}
				volume={volume}
				onClickToggleFavorite={() => updateFavoritesInDB(playingId)} />
			<audio ref={audioRef} src=""></audio>
			<MobileMenu ref={mobileMenuRef}
				toggleDialog={() => toggleDialog(mobileMenuRef)}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setSearchDescr={setSearchDescr}
				userName={userName}
				onClickLoginBtn={onClickLoginBtn}
				onClickFavoritListBtn={onClickFavoritListBtn}
				onClickExitUser={onClickExitUser}
				userDetailsIsActive={userDetailsIsActive}
				setUserDetailsIsActive={setUserDetailsIsActive} />
			<LoginModal title={loginTitle}
				modalRef={loginModalRef}
				regModalRef={regModalRef}
				toggleDialog={toggleDialog}
				setUserName={setUserName}
				setFavorites={setFavorites}
				apiOrigin={apiOrigin} />
		</>
	)
}

