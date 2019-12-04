const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login('NjUwMDQ3ODkyOTY2NDczNzY5.XeFqXA.fy8lGC9NJeaRUO0J3YBqWZEtvnA');

const PREFIX = '!';


bot.on('ready', () =>{
    console.log('your project has been successfully finish. There is No errors you can run it');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'h' :

            {
                if(message.member.voiceChannelID)
            { 
                if(!message.guild.voiceChannelID)
                { 
                    message.member.setVoiceChannel()
                    .then(connection =>{
                        message.reply(`המשתמש הזה
<@&650054467848503297> צריך את העזרה שלכם\`\`\``+ message.member.voiceChannel.name+`המשתמש נימצא בחדר דיבור\`\`\`:mute: :no_entry_sign:`);
                    })
                }
            }
            else
        { 
            message.reply(`המשתמש הזה
<@&650054467848503297> צריך את העזרה שלכם\`\`\`המשתמש לא נמצא באף חדר דיבור \`\`\` :mute: :no_entry_sign:`);

        }
    }   
        break;
        

        }
})
