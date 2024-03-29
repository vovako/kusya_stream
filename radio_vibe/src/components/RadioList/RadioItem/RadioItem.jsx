import React from 'react';
import './radio-item.scss'
import idleFavor from '../../../assets/idle-favor.svg'
import addToFavor from '../../../assets/favor.svg'

export default function RadioItem({ id, isFavorite, image, title, isPlaying, setPlayingId, updateFavoritesInDB }) {
	function onClickItem(evt) {
		if (evt.target.classList.contains('radio-item__favorite-btn')) {

			updateFavoritesInDB(id)
			return
		}
		if (!isPlaying) setPlayingId(id);
	}

	return (
		<div className={isPlaying ? "radio-item active" : "radio-item"} onClick={onClickItem}>
			<div className="radio-item__image"><img src={image} alt="" /></div>
			<div className="radio-item__body">
				<div className="radio-item__title">{title}</div>
				{isFavorite && (
					<button className="radio-item__favorite-btn add-to-favorite">
						<img src={addToFavor} alt="" />
					</button>
				)}
				{!isFavorite && (
					<button className="radio-item__favorite-btn idle-favorite">
						<img src={idleFavor} alt="" />
					</button>
				)}
			</div>
		</div>
	);
}