const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6282376267531'] // no own
global.author = '𝐀𝐢𝐬𝐲𝐚𝐡𝐨𝐟𝐜' // nama author 
global.packname = '𝐄𝐥𝐚𝐢𝐧𝐚-𝐁𝐨𝐭𝐳' // nama pack sticker
global.namabot = '𝐄𝐥𝐚𝐢𝐧𝐚-𝐁𝐨𝐭𝐳' // nama bot mu
global.group = 'https://chat.whatsapp.com/EQc33IWwlEo3cLGoXiworJ' // grup mu



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
