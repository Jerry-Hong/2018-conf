const express = require('express')
const next = require('next')
const moment = require('moment-timezone')

moment.tz.setDefault('Asia/Taipei')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './web' })
const handle = app.getRequestHandler()

const port = process.env.PORT || 8080

app
	.prepare()
	.then(() => {
		const server = express()

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(port, err => {
			if (err) throw err
			console.log(`> Ready on http://localhost:${port}`)
		})
	})
	.catch(ex => {
		console.error(ex.stack)
		process.exit(1)
	})
