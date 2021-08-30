const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const fs = require('fs')
const app = express()

const admin = 'Admin Devan'

const fileData = fs.readFileSync('data/data.json', 'utf-8')
const data = JSON.parse(fileData)

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded())

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'layouts/layout-utama',
		title: 'Home',
		content: data
	})
})

app.get('/addpost', (req, res) => {
	res.render('addpost', {
                layout: 'layouts/layout-utama',
                title: 'Tambah Postingan',
		kirim: false
	})
})

app.post('/addpost', (req, res) => {
	data.push(req.body)
	fs.writeFileSync('data/data.json', JSON.stringify(data))

	res.render('addpost', {
		layout: 'layouts/layout-utama',
		title: 'Tambah Postingan',
		kirim: true
	})
})

app.listen(process.env.PORT || 3000, () => {
	console.log('listening di port 3000')
})
