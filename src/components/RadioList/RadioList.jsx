import React from 'react';
import './radio-list.scss'
import RadioItem from './RadioItem/RadioItem';

export default function RadioList({ radioArray, playingId, setPlayingId }) {

	function isPlaying(id) {
		if (playingId === null) return false;

		return id === playingId
	}

	return (
		<div className="radio-list" >
			{radioArray.map((item) => (
				<RadioItem image={item.image}
					title={item.title}
					isFavorite={false}
					isPlaying={isPlaying(item.id)}
					key={item.id}
					id={item.id}
					setPlayingId={setPlayingId} />
			))}
		</div>
	);
}