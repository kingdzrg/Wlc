const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("545651706893959221");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome 2 Geem. :yes:**`), 4000)        
}
});
client.login(process.env.TOKEN);
