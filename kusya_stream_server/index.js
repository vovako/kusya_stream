import express from "express";
import cors from 'cors'
import * as usersController from './domain/users/controller.js'
// import * as VKID from '@vkid/sdk';

// const APP_ID = 51868424
// const REDIRECT_URL = 'https://rnxfx-94-41-185-67.a.free.pinggy.online'

// VKID.Config.set({
// 	app: APP_ID, // Идентификатор приложения.
// 	redirectUrl: REDIRECT_URL, // Адрес для перехода после авторизации.
// });

const app = express()
const port = 3000

const whitelist = ['http://localhost:5173'];
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(null, false);
		}
	},
	methods: ['GET', 'PUT', 'POST'],
	allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/users/login', usersController.login)
app.post('/users/setFavorites', usersController.setFavorites)

app.listen(port, () => {
	console.log(`server started on ${port} port`);
})