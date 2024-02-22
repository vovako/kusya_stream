import React, { useEffect } from 'react';
import idleFavor from '../../assets/idle-favor.svg'
import addToFavor from '../../assets/favor.svg'
import defaultImage from '../..//assets/image.png'
import './radio-list.scss'

export default function RadioList({ isFavorite = false }) {
	let listHeight = 'auto';

	useEffect(() => {
		listHeight = document.querySelector('.radio-list').clientHeight
	}, [])
	return (
		<div className="radio-list" style={{ height: listHeight }}>
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			{/* <div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			</div> */}
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
			<div className="radio-item">
				<div className="radio-item__image"><img src={defaultImage} alt="" /></div>
				<div className="radio-item__body">
					<div className="radio-item__title">Русская волна</div>
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
		</div>
	);
}