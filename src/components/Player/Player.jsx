import React from 'react';
import './player.scss'
import idleFavor from '../../assets/idle-favor.svg'
import addToFavor from '../../assets/favor.svg'

export default function Player({ isPlaying = false, isFavorite = false }) {
	return (
		<div className="player">
			{isPlaying && (
				<button className="player__state-btn pause-btn"></button>
			)}
			{!isPlaying && (
				<button className="player__state-btn play-btn"></button>
			)}
			<input type="range" orient="vertical" className="player__volume-input" />
			<div className="player__body player-body">
				<div className="player-body__title">Полное название текущего трека</div>
				<div className="player-body__author">Исполнитель</div>
				<div className="player-body__row">
					<div className="player-body__radio-title">Радио -  Русская Волна</div>
					{isFavorite && (
						<button className="player-body__favorite-btn remove-from-favorite">
							<img src={addToFavor} alt="" />
						</button>
					)}
					{!isFavorite && (
						<button className="player-body__favorite-btn add-to-favorite">
							<img src={idleFavor} alt="" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}