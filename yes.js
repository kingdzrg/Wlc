const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("670342755834396682");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Hey, Welcome To Trust !** <:Zine1:670079102874812417> `), 4000)        
}
});



client.login(process.env.TOKEN);
