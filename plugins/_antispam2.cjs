/* CRΓDITOS: https://github.com/Abiguelreyes75 */

export async function all(m, conn) {
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.antispam)
return !0
if (+new Date() > user.antispam) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
texto = `*[β] @${m.sender.split("@")[0]} π΅ππ΄ π³π΄ππ±π°π½π΄π°π³πΎ π³π΄ππΏππ΄π π³π΄ π΄πππ°π π±π°π½π΄π°π³πΎ π³πππ°π½ππ΄ ${tiempo / 1000 - 59} πΌπΈπ½πππΎ, ππ° π½πΎ π·π°πΆπ°π ππΏπ°πΌ!!!*`
this.sendButton(m.chat, texto, wm, null, [['βοΈ π  π π‘ π¨', '#menu']], m, { mentions: this.parseMention(texto) })}, tiempo)        
user.antispam = null
}}