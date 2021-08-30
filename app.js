const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const { loadData, saveData } = require('./module/module.js')
const app = express()

const admin = 'Admin Devan'

const data = loadData('data/data.json')

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
	saveData('data/data.json', data)

	res.render('addpost', {
		layout: 'layouts/layout-utama',
		title: 'Tambah Postingan',
		kirim: true
	})
})

app.listen(process.env.PORT || 3000, () => {
	console.log('listening di port 3000')
})
