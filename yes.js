const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("673647025224679424");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To Trust ! .. Check <#673631347016859665> <a:emoji_41:673447060963590166> <a:love:673487121247502377>**`), 4000)        
}
});



client.login(process.env.TOKEN);
