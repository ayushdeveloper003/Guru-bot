
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['pppppppp']
handler.tags = ['main']
handler.command = ['ggggggg', 'kkkkkkkk', 'aaaaaaaa', 'llllllllll', 'mmmmmmmmmm'] 

export default handler
