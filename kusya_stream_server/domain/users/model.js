import { DBquery } from '../../func.js'

export async function login(email, password) {
	const result = await DBquery(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`, 'all')
	const data = result.length ? result[0] : null
	const error = result.length ? null : 'Неправильная почта или пароль'
	const resp = {
		data,
		error
	}
	return resp
}

export async function setFavorites(favorites, id) {
	await DBquery(`UPDATE users SET favorites_list='${favorites}' WHERE id=${id}`, 'all')
}