async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*—◉ LISTA DE SUBBOTS ACTIVOS 🤖️*\n\n*◉ 𝑷𝑼𝑬𝑫𝑬𝑺 𝑪𝑶𝑵𝑻𝑨𝑪𝑻𝑨𝑹𝑳𝑶𝑺 𝑷𝑨𝑹𝑨 𝑸𝑼𝑬 𝑺𝑬 𝑼𝑵𝑨𝑵 𝑨 𝑻𝑼 𝑮𝑹𝑼𝑷𝑶, 𝑺𝑬 𝑹𝑬𝑺𝑷𝑬𝑻𝑼𝑶𝑺𝑶.*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
