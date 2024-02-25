import React, { forwardRef, useState } from 'react';
import './modal.scss'
import crossIcon from '/src/assets/cross.svg'
import vkIcon from '/src/assets/vk.svg'

const Modal = forwardRef(({ toggleDialog, children }, ref) => {

	return (
		<dialog ref={ref} className='modal'>
			<div className="modal__content">
				<button onClick={toggleDialog} className='modal__close-btn'>
					<img src={crossIcon} alt="" />
				</button>
				{children}
			</div>
		</dialog>
	);
})
export default Modal;

export function LoginModal({ modalRef, regModalRef, toggleDialog, title = null }) {
	const [loginValue, setLoginValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	function close() {
		toggleDialog(modalRef)
		setLoginValue('')
		setPasswordValue('')
	}

	function onClickRegBtn() {
		toggleDialog(modalRef)
		toggleDialog(regModalRef)
	}

	return (
		<>
			<Modal ref={modalRef} toggleDialog={close} >
				<div className="login">
					<div className="login__title">{title ?? 'Авторизация'}</div>
					<input value={loginValue} onChange={(evt) => setLoginValue(evt.target.value)} type="email" placeholder='email' className="login__input input" />
					<input value={passwordValue} onChange={(evt) => setPasswordValue(evt.target.value)} type="password" placeholder='пароль' className="login__input input" />
					<div className="login__buttons">
						<button onClick={onClickRegBtn} className="link-btn">Регистрация</button>
						<button className="btn">Войти</button>
					</div>
					<div className="login__notice">Неправильная почта или пароль</div>
					<div className="login__other-ways">
						<span>Войти через:</span>
						<button className='other-way-btn'>
							<img src={vkIcon} alt="" />
						</button>
					</div>
				</div>
			</Modal>
			<RegistrModal modalRef={regModalRef} toggleDialog={toggleDialog} />
		</>

	);
}

export function RegistrModal({ modalRef, toggleDialog }) {
	const [loginValue, setLoginValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	function close() {
		toggleDialog(modalRef)
		setLoginValue('')
		setPasswordValue('')
	}

	return (
		<Modal ref={modalRef} toggleDialog={close} >
			<div className="login">
				<div className="login__title">Регистрация</div>
				<input value={loginValue} onChange={(evt) => setLoginValue(evt.target.value)} type="email" placeholder='email' className="login__input input" />
				<input value={passwordValue} onChange={(evt) => setPasswordValue(evt.target.value)} type="password" placeholder='пароль' className="login__input input" />
				<div className="login__buttons">
					<div></div>
					<button className="btn">Регистрация</button>
				</div>
				<div className="login__notice">Неправильная почта или пароль</div>
				<div className="login__other-ways">
					<span>Вход через:</span>
					<button className='other-way-btn'>
						<img src={vkIcon} alt="" />
					</button>
				</div>
			</div>
		</Modal>
	);
}
