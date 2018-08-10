const Discord = require('discord.js');
const client = new Discord.Client();
const { key, secret, prefix } = require('../config/discord_api.json');


client.on('ready', () => {
  console.log('operating');
});

client.on('guildMemberAdd', async member => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);
​
  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find('name', 'general').send(`Welcome to the server: ${userlist}`);
    newUsers[guild.id].clear();
  }
});
​
client.on('guildMemberRemove', async member => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  
});

client.login(secret);
