import React from 'react';
import './radio-list.scss'
import RadioItem from './RadioItem/RadioItem';
import imagedef from '../../assets/image.png'

export default function RadioList() {
	return (
		<div className="radio-list" >
			<RadioItem image={imagedef} title="Название" isFavorite={false} />
		</div>
	);
}