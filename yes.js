const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("676108379311308801");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`> ** Welcome  To Rose Empire <a:rose:676469611092377620>  <a:Empireose:676469611092377620> **`), 4000)        
}
});


client.login(process.env.TOKEN);
