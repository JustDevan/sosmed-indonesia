const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home',
		content: {
			gambar: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
			nama: 'Ini Devan',
			caption: 'Ini postingan pertama'
		}
		
	})
})

app.get('/addpost', (req, res) => {
	res.send('Ini halaman tambah postingan')
})

app.listen(3000, () => {
	console.log('listening di port 3000')
})
