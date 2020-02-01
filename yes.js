const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("673257832115732494");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** > Welcome To Trust ! .. Check #・أثبت_نفسك :cherry_blossom: :notes: **`), 4000)        
}
});



client.login(process.env.TOKEN);
