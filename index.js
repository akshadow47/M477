const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");
const dailyFacts = require("./config/dailyfacts.json")
const yomama = require("./config/yomama.json")

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})


client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(`sup`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("how are you"))
  {
    message.channel.send(`https://cdn.discordapp.com/attachments/894939591226835005/895560549658660884/unknown.png`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good"))
  {
    message.channel.send(`:>`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(`Huh? what's funny?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`BIG BRUH MOMENTO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(`WHY?! UR SUCH AN AMAZING PERSON!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hey Chill"))
  {
    message.channel.send(`Hello! I am here.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(`U sus`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(`hey!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("what's your name?"))
  {
    message.channel.send(`My name is Chill! I definitely do not serve the Soviet Union`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`wanna invite me ? here's the link - https://discord.com/api/oauth2/authorize?client_id=893109082330898444&permissions=8&scope=bot`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`Lol!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("die"))
  {
    message.channel.send(`NU BLYAT`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("who is the owner?"))
  {
    message.channel.send(`Its Axiantzy!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("who made you?"))
  {
    message.channel.send(`Rick Astley and Axriantzy made me`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("good bot"))
  {
    message.channel.send(`themks!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hmm"))
  {
    message.channel.send(`are you bored? try playing songs using /play in a VC`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hm"))
  {
    message.channel.send(`are you bored? try playing songs using /play in a VC`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Hm"))
  {
    message.channel.send(`are you bored? try playing songs using /play in a VC`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Hmm"))
  {
    message.channel.send(`are you bored? try playing songs using /play in a VC`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("great server"))
  {
    message.channel.send(`thank you have a good stay😁`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Great server"))
  {
    message.channel.send(`thank you have a good stay😁`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("what is your name?"))
  {
    message.channel.send(`My name is Chill I definitely do not serve the Soviet Union`)
  }
});
client.on('message', message => {
	if (message.content === '@842368470284632094') {
		message.react(':regional_indicator_n:');
	} message.react('regional_indicator_o');
});
client.on("message", async message =>{
  if (message.content.startsWith("shut up"))
  {
    message.channel.send(`https://media3.giphy.com/media/Wt6kNaMjofj1jHkF7t/giphy.gif?cid=ecf05e4721pvghthauedules3doc09iedfrsmkicmfp755aq&rid=giphy.gif&ct=g`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nice to meet you"))
  {
    message.channel.send(`hello welcome to Chill World make sure to read rules first thank you 😁`)
  }
});
client.on('message', message => {
	if (message.content === 'i like this server') {
		message.react('😃');
	}
});
client.on("message", async message =>{
  if (message.content.startsWith("fuck you"))
  {
    message.channel.send(`https://cdn.discordapp.com/attachments/891981498218070016/895606837330735114/U.gif`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("fuck you"))
  {
    message.channel.send(`Go step on a lego :)`)
  }
});

client.on("message", async message =>{
  if (message.content.startsWith("Fuck you"))
  {
    message.channel.send(`https://cdn.discordapp.com/attachments/891981498218070016/895606837330735114/U.gif`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("9+10=21"))
  {
    message.channel.send(`U stupid`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lol"))
  {
    message.channel.send(`LMAO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bye"))
  {
    message.channel.send(`See you later!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("avocados from mexico"))
  {
    message.channel.send(`Out of stock`)
  }
});
client.on('message', message => {
	if (message.content === 'noice') {
		message.react('892054132926578719');
	}
});
client.on("message", async message =>{
  if (message.content.startsWith("want to call?"))
  {
    message.channel.send(`Can i join too? pls`)
  }
});
client.on('message', message => {
	if (message.content === 'want to call?') {
		message.react('892054132926578719');
	}
});
client.on('message', message => {
	if (message.content === 'hey ax') {
		message.react('🇭');
		message.react('🇪');
		message.react('🇾');
	}
});
client.on('message', message => {
	if (message.content === 'Hey ax') {
		message.react('🇭');
		message.react('🇪');
		message.react('🇾');
	}
});
client.on('message', message => {
	if (message.content === 'hey chill') {
		message.react('🇭');
		message.react('🇪');
		message.react('🇾');
	}
});
client.on('message', message => {
	if (message.content === 'Hey chill') {
		message.react('🇭');
		message.react('🇪');
		message.react('🇾');
	}
});
client.on("message", async message =>{
  if (message.content.startsWith("hey chill"))
  {
    message.channel.send(`AYY`)
  }
});
client.on('message', msg => {                 //when a message is sent
  if(msg.content.includes("<@!849891708317859880>")){//checks if they pinged the owner.
// you can get the id by right-clicking the profile and copy id. you will need to turn on developer mode
   msg.channel.send('My maker is busy dont ping him pls');
                                   
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("i love you"))
  {
    message.channel.send(`Not me lol`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("what does the fox say?"))
  {
    message.channel.send(`"Ring-ding-ding-ding-dingeringeding!
Gering-ding-ding-ding-dingeringeding!
Gering-ding-ding-ding-dingeringeding!"
What the fox say?
"Wa-pa-pa-pa-pa-pa-pow!
Wa-pa-pa-pa-pa-pa-pow!
Wa-pa-pa-pa-pa-pa-pow!"`)
  }
});
client.on('message', message => {
	if (message.content === 'amogus') {
		message.react('886634772934303814');
	}
});
client.on("message", async message =>{
  if (message.content.startsWith("69"))
  {
    message.channel.send(`Noice`)
  }
});
client.on('message', message => {
	if (message.content === 'sus') {
		message.react('892045248719622144');
	}
});
client.on("message", async message =>{
  if (message.content.startsWith("sus"))
  {
    message.channel.send(`AMOGUS`)
  }
});
client.on('message', message => {
	if (message.content === 'aboutserver') {
		message.channel.send(`╔═▬▬▬▬▬๑◥◣◆◢◤๑▬▬▬▬▬═╗
                ««« Chill World »»»
╚═▬▬▬▬▬๑◢◤◆◥◣๑▬▬▬▬▬═╝
                             ──────────────────
╭➱『✅』【Semi-Active Chat】
┊➱『✅』【Always Partnering!】
┊➱『✅』【Great Staff!】
┊➱『✅』【Constant Events!】
┊➱『✅』【Fun Game Bots!】
╰➱『✅』【Great active community.】
──────────────────
               What We're Looking for

╭➱『✅』【Partner Managers!】
┊➱『✅』【Giveaway Managers!】
┊➱『✅』【Shop Keepers!】
╰➱『✅』【Nitro Boosters!】
──────────────────`)
	}
});
client.on('message', message => {
	if (message.content === 'bot gay') {
		message.channel.send(`Gay?
     Dude i am straighter than the pole your mom dances on.`)
	}
});
client.on('message', message => {
	if (message.content === 'dailyfact') {
		message.channel.send(`Facts!- Vladmir Putin was born on 7 October 1952 and today his age is 69 years noice eh?`)
	}
});
client.on('message', message => {
	if (message.content === 'i am thirsty') {
		message.channel.send(`https://i.kym-cdn.com/photos/images/original/001/869/756/c4d.jpeg`)
	}
});
client.on('message', message => {
	if (message.content === 'meme') {
		message.channel.send(`I am not gonna steal memes go to reddit.com/r/memes to get memes`)
	}
});
client.on('message', message => {
	if (message.content === 'sus') {
		message.react('🅱️');
		message.react('🇦');
		message.react('🇰');
    message.react('🅰️')
	}
});
client.on('message', message => {
if (message.content.startsWith('music plz')) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
        return message.reply('How tf am I supposed to play music without u in a Voice channel? join a Voice Channel first');
    }
    voiceChannel.join()
.then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
})
.catch(console.log);
}
});

client.on('message', msg => {
  if (msg.content === 'dailyfacts') {
    const fact = dailyFacts[Math.floor(Math.random() * dailyFacts.length)];
    msg.reply(`Your fact: ${fact}`);
  }
})
.catch(console.log);
client.on('message', msg => {
  if (msg.content === 'yomamajoke') {
    const yomama = yomama[Math.floor(Math.random() * dailyFacts.length)];
    msg.reply(`Yo mama jokes: ${yomama}`);
  }
});


