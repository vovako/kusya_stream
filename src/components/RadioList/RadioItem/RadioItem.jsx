import React from 'react';
import './radio-item.scss'
import idleFavor from '../../../assets/idle-favor.svg'
import addToFavor from '../../../assets/favor.svg'

export default function RadioItem({ isFavorite, image, title }) {
	return (
		<div className="radio-item">
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