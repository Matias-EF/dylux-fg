function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ OWNER*
  *Matias*
▢ Instagram :
  • https://www.instagram.com/matiass.zzz._
▢ WhatsApp :
  • https://chat.whatsapp.com/JIRYr6hK0gw2PusdUlsG0R

`) 


}

handler.help = ['creador
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
