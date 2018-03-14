const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url = 'http://nodeprogram.com') => {
	console.log('downloading ', url)
	const fetchPage = (urlF, callback) => {
		http.get(urlF, response => {
			let buff = ''
			response.on('data', chunk => {
				buff += chunk
			})
			response.on('end', () => {
				callback(null, buff)
			})
		})
		.on('error', error => {
			console.error(`Got error: ${error.message}`)
			callback(error)
		})
	}

	const folderName = uuidv1()
	fs.mkdirSync('downloads/' + folderName)
	fetchPage(url, (error, data) => {
		if (error) return console.log(error)
		fs.writeFileSync(path.join(__dirname, 'downloads/' + folderName, 'url.txt'), url)
		fs.writeFileSync(path.join(__dirname, 'downloads/' + folderName, 'file.html'), data)
		console.log('downloading is done in folder downloads/', folderName)
	})
}

downloadPage(process.argv[2])
//need to see a new tut for grabbing https pages, as some sites no longer have a http site.
