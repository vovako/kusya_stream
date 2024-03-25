import sqlite from "sqlite3"

export function DBquery(command, method) {
	// Открываем соединение с базой данных
	const db = new sqlite.Database('.//kusya_stream_db');

	return new Promise((resolve, reject) => {
		db[method](command, (error, result) => {
			if (error) {
				reject(error);
			} else {
				//Закрываем соединение с базой данных
				db.close()
				resolve(result);
			}
		});
	});
}