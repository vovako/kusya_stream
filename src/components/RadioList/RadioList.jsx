import React from 'react';
import './radio-list.scss'
import RadioItem from './RadioItem/RadioItem';
import imagedef from '../../assets/image.png'

export default function RadioList({ radioArray }) {

	return (
		<div className="radio-list" >
			<RadioItem image={radioArray[0].image} title={radioArray[0].title} isFavorite={false} />
		</div>
	);
}