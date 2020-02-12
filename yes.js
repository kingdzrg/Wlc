const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("641270361349947420");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** - Hi , Welcome To ``London`` ❤️ **`), 4000)        
}
});


client.login(process.env.TOKEN);
