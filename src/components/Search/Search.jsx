import React from 'react';
import './search.scss'

export default function Search({ value, setValue }) {
	return (
		<search role="search" className='search'>
			<input type="text" className="search__input" placeholder='Поиск радио' value={value} onChange={(evt) => setValue(evt.target.value)} />
			<button className="search__submit-btn">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M2.8 10.6007C2.8 6.15476 6.40412 2.55064 10.85 2.55064C15.2959 2.55064 18.9 6.15476 18.9 10.6007C18.9 15.0466 15.2959 18.6507 10.85 18.6507C6.40412 18.6507 2.8 15.0466 2.8 10.6007ZM10.85 0.250641C5.13386 0.250641 0.5 4.8845 0.5 10.6007C0.5 16.3169 5.13386 20.9507 10.85 20.9507C13.2938 20.9507 15.5397 20.1037 17.3104 18.6873L21.5369 22.9138C21.9859 23.3629 22.7141 23.3629 23.1632 22.9138C23.6123 22.4648 23.6123 21.7366 23.1632 21.2875L18.9367 17.061C20.3531 15.2904 21.2 13.0444 21.2 10.6007C21.2 4.8845 16.5662 0.250641 10.85 0.250641Z" fill="#9AF9FE" />
				</svg>
			</button>
		</search>
	);
}