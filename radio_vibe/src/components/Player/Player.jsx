import React from 'react';
import './player.scss'
import idleFavor from '../../assets/idle-favor.svg'
import addToFavor from '../../assets/favor.svg'

export default function Player({ isPause, onClickPlayPauseBtn, radioName, soundAuthor, soundName, volume, setVolume, isFavorite, onClickToggleFavorite }) {
	return (
		<div className='player'>
			<button onClick={onClickPlayPauseBtn} className={`player__state-btn ${isPause ? 'play-btn' : 'pause-btn'}`}></button>
			<input type="range" orient="vertical" className="player__volume-input" max="1" step="0.01" min="0"
				value={volume}
				onChange={(evt) => setVolume(evt.target.value)} />
			<div className="player__body player-body">
				<div className="player-body__title">{soundName}</div>
				<div className="player-body__author">{soundAuthor}</div>
				<div className="player-body__row">
					<div className="player-body__radio-title">{radioName}</div>
					{radioName !== null && isFavorite && (
						<button onClick={onClickToggleFavorite} className="player-body__favorite-btn remove-from-favorite">
							<img src={addToFavor} alt="" />
						</button>
					)}
					{radioName !== null && !isFavorite && (
						<button onClick={onClickToggleFavorite} className="player-body__favorite-btn add-to-favorite">
							<img src={idleFavor} alt="" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}