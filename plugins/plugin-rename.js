import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
  renameSync
} from 'fs'
let handler = async (m, { args, text, usedPrefix, command }) => {
	let info = `${usedPrefix + command} *<nama lama> | <nama baru>*

• *contoh:*
➞ ${usedPrefix + command} *inv | rpg-inv*

• *Note:*
_Mohon untuk tidak menggunakan kata .js di akhir kalimat_

_Tolong jangan gunakan spasi di antara nama file, seperti “rpg- inv”_`
if (!args[0]) throw info
if (!args[1] == "|") throw `• *contoh:*
➞ ${usedPrefix + command} *inv | rpg-inv*`
if (!args[2]) throw `• *contoh:*
➞ ${usedPrefix + command} *inv | rpg-inv*`

let from = args[0]
let to = args[2]

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!ar1.includes(args[0])) return m.reply(`*🗃️ TIDAK DITEMUKAN!*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
await renameSync(`./plugins/${from}.js`, `./plugins/${to}.js`)
conn.reply(m.chat, ` *NAMA BERHASIL DIUBAH DARI* "plugins/${from}.js" *MENJADI*  "plugins/${to}.js"`, m)
    
}
handler.help = ['renamefile'].map(_=> _ + " [ *ɴᴀᴍᴀ ʟᴀᴍᴀ* | *ɴᴀᴍᴀ ʙᴀʀᴜ* ]")
handler.tags = ['']
handler.command = ['rename', 'rf']
handler.owner = true
export default handler