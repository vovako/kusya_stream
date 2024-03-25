import * as userModel from './model.js'

export async function login(req, res) {
	console.log('login request', req.body);

	const email = req.body.email
	const password = req.body.password
	const data = await userModel.login(email, password)
	res.send(data)
}

export async function setFavorites(req, res) {
	console.log('setFavorites request', req.body);

	const id = req.body.id
	const favorites = req.body.favorites
	await userModel.setFavorites(favorites, id)
	res.sendStatus(200)
}