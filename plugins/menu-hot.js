const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*γπ π·πΎπ»π° _${name}_ πε½‘*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<βπππΈβπ»ππ +ππ />*

Β° ΰΆ¬βπ _${usedPrefix}pack_
Β° ΰΆ¬βπ _${usedPrefix}pack2_
Β° ΰΆ¬βπ _${usedPrefix}pack3_
Β° ΰΆ¬βπ _${usedPrefix}videoxxx_
Β° ΰΆ¬βπ _${usedPrefix}tiktokxxx_
Β° ΰΆ¬βπ _${usedPrefix}tetas_
Β° ΰΆ¬βπ _${usedPrefix}booty_
Β° ΰΆ¬βπ _${usedPrefix}ecchi_
Β° ΰΆ¬βπ _${usedPrefix}furro_
Β° ΰΆ¬βπ _${usedPrefix}imagenlesbians_
Β° ΰΆ¬βπ _${usedPrefix}panties_
Β° ΰΆ¬βπ _${usedPrefix}pene_
Β° ΰΆ¬βπ _${usedPrefix}porno_
Β° ΰΆ¬βπ _${usedPrefix}porno2_
Β° ΰΆ¬βπ _${usedPrefix}randomxxx_
Β° ΰΆ¬βπ _${usedPrefix}pechos_
Β° ΰΆ¬βπ _${usedPrefix}yaoi_
Β° ΰΆ¬βπ _${usedPrefix}yaoi2_
Β° ΰΆ¬βπ _${usedPrefix}yuri_
Β° ΰΆ¬βπ _${usedPrefix}yuri2_
Β° ΰΆ¬βπ _${usedPrefix}trapito_
Β° ΰΆ¬βπ _${usedPrefix}hentai_
Β° ΰΆ¬βπ _${usedPrefix}nsfwloli_
Β° ΰΆ¬βπ _${usedPrefix}nsfworgy_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfoot_
Β° ΰΆ¬βπ _${usedPrefix}nsfwass_
Β° ΰΆ¬βπ _${usedPrefix}nsfwbdsm_
Β° ΰΆ¬βπ _${usedPrefix}nsfwcum_
Β° ΰΆ¬βπ _${usedPrefix}nsfwero_
Β° ΰΆ¬βπ _${usedPrefix}nsfwfemdom_
Β° ΰΆ¬βπ _${usedPrefix}nsfwglass_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT', 'GRUPO OFICIAL', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['hotmenu', 'help2', '?2', 'menuaudios']
handler.tags = ['hotmenu']
handler.command = /^(hotmenu|menuhot|menu+18)$/i
handler.fail = null
export default  handler
