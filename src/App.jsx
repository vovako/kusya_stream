import './App.scss'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import RadioList from './components/RadioList/RadioList'

export default function App() {

	return (
		<>
			<Header />
			<main className="main">
				<div className="main__search-msg">
					Ничего не найдено по запросу “Радио energy”
				</div>
				<RadioList />
			</main>
			<Player />
		</>
	)
}