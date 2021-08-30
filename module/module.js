const fs = require('fs')

const loadData = path => {
	const data = fs.readFileSync(path, 'utf-8')
	return JSON.parse(data)
}

const saveData = (path, data) => {
	fs.writeFileSync(path, JSON.stringify(data))
}

module.exports = { loadData, saveData }
