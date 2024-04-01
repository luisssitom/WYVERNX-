import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url' 

global.owner = [ '528714020666', 'WYV', true]
  [ '5218714017792', 'Łuisssito', true ],
  [ '5215534215245', 'ඞ 𝐿.𝐴𝑛 ༆', true ]
]
] //Numeros de owner 

global.mods = [ '528714017792' ] 
global.prems = [ '528714017782', '528714020666']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Wyvernx┃ᴮᴼᵀ' 
global.author = '@luisssitom' 

//--info FG
global.botName = 'WYVERNX'
global.fgig = 'https://www.instagram.com/luisssitom' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/luisssitom'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.fgcanal = 'deleted'
global.bgp = 'deleted'
global.bgp2 = 'deleted'
global.bgp3 = 'deleted' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
