
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Missing text for survey \n\n📌 Example : \n*${usedPrefix + command}* Message  |AYUSH|xd`
if (!text.includes('|')) throw  `✳️ Separate surveys with *|* \n\n📌 Example : \n*${usedPrefix + command}* my survey|n  |AYUSH|xd|piro`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survey requested by:* ${name}\n\n*Message:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <AYUSH|piro|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
