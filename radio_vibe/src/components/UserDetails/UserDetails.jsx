import React from 'react';
import userIcon from '/src/assets/user.svg'
import arrowIcon from '/src/assets/arrow-bottom.svg'

function UserDetails({ userName, onClickUserDetails, onClickExit, userDetailsIsActive, onClickLoginBtn }) {
	return (
		<>
			{userName === null && (
				<button onClick={onClickLoginBtn} className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={userIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">Войти</div>
				</button>
			)}
			{userName !== null && (
				<div className="menu-dialog-item">
					<div className="menu-dialog-item__image">
						<img src={userIcon} alt="" />
					</div>
					<div className="menu-dialog-item__title">{userName}</div>
					<div className="user-details">
						<button onClick={onClickUserDetails}
							className={userDetailsIsActive ? 'user-details__btn active' : 'user-details__btn'}>
							<img src={arrowIcon} alt="" />
						</button>
						<div className="user-details__list">
							<button onClick={onClickExit} className="user-details__item">Выйти</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default UserDetails;