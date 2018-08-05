const Discord = require('discord.js');



const firstm = new Discord.Client();
const tndm = new Discord.Client();
const thm = new Discord.Client();
const fou = new Discord.Client();
const fiv = new Discord.Client();
const six = new Discord.Client();
const seven = new Discord.Client();
const eight = new Discord.Client();
const nine = new Discord.Client();
const ten = new Discord.Client();
const eleven = new Discord.Client();
const twelve = new Discord.Client();

  const lol =
[
'**Welcome __2__ `Dynasty` Server.**',
'**Weeeeeeelcome to __Dynasty__ world.**',
'**Welcome To Dynasty.**',
`**Weelcome to <:Dynasty:475553643349671937> .**`,
'**Weelcome to Dynaasty,?**',
"**Welcome to dynasty, Youu're in Dynassty world.**"
]

//first account

firstm.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

firstm.on('guildMemberAdd', member => {
	if(member.user.id === '462347056007086080') return;
const codes = member.guild.channels.get("473884668823994368");//ايدي الشات
if(!codes) return;
if(codes) {
setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]}`), 2000)        
}
});

//2nd

tndm.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

tndm.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("473884668823994368");//ايدي الشات
if(!codes) return;
if(codes) {
setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]}`), 2000)        
}
});


//thm

thm.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

thm.on('guildMemberAdd', member => {
	if(member.user.id === '462347056007086080') return;
const codes = member.guild.channels.get("473884668823994368");//ايدي الشات
if(!codes) return;
if(codes) {
setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]}`), 3000)        
}
});

//four acccount


fou.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

fou.on('guildMemberAdd', member => {
	if(member.user.id === '462347056007086080') return;
const codes = member.guild.channels.get("473884668823994368");//ايدي الشات
if(!codes) return;
if(codes) {
setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]}`), 4000)        
}
});

//fiv

fiv.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

fiv.on('guildMemberAdd', member => {
	if(member.user.id === '462347056007086080') return;
const codes = member.guild.channels.get("473884668823994368");//ايدي الشات
if(!codes) return;
if(codes) {
setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]}`), 5000)        
}
});


//six

six.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});


//seven

seven.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

//eight


eight.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});
//nine

nine.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

//ten

ten.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

//eleven


eleven.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});


//twelve

twelve.on('message', message => {
	if(message.content === 'joinplz') {
		    const voiceChannel = message.member.voiceChannel;
		    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
		voiceChannel.join()
	}
});

//login
thm.login(process.env.1);
tndm.login(process.env.2);
firstm.login(process.env.3);
fou.login(process.env.4);
fiv.login(process.env.5);
six.login(process.env.6);
seven.login(process.env.7);
eight.login(process.env.8);
nine.login(process.env.9);
ten.login(process.env.10);
eleven.login(process.env.11);
twelve.login(process.env.12);
