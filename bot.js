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
		if(member.user.id === '462347056007086080') return;
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
thm.login("NDc1MzA3NDQxODY5ODE1ODI4.DkdIaA.6bsicTiEWlcvFoskoGVVHUK6gnU");
tndm.login("NDc1MzAxNjExNTA2MzY4NTE3.DkdCxg.Rf5r6Msc9id04nnmMXa2e3Zwu5o");
firstm.login("NDc1MzAyNTcxNDk4NjY4MDU0.DkdD6A.r_-hEn-ZxlD5nR702fS8d_UOgNI");
fou.login("NDc1MzA4NzgwNzk2NzcyMzUy.DkdJhg.jYcNbztLq7qAmQtBqlIBHseMmDo");
fiv.login("NDc1MzEyOTE5ODI0MDM5OTQ3.DkdNiw.6weWpFxOUaW5zipk7xpULzow8dM");
six.login("NDc1MzE0OTcwNzA4NjcyNTMy.DkdPOA.IsEtc_RheJ1CFgIyyjkN9bGvHAc");
seven.login("NDc1MzIxODYyOTY1MTY2MDkx.DkdVsw.XBdj_EuGCFhsxOnyEieRWciNvCI");
eight.login("NDc1MzI0MzMyNjUwNzkwOTEz.DkdYJg.YmIzAa6D-bIOMPYytb0yyhypSTg");
nine.login("NDc1MzI1MTcwMzIwNjcwNzUw.DkdYsA.yTHqeWFh1oRyT1Akr35d5C14nnI");
ten.login("NDc1MzI1NjYwMTA2MDYzOTAz.DkdZUg.Vyufwlkt3EHSfS1P0udl9Tug5o4");
eleven.login("NDc1MzI2ODY5NDc0OTAyMDM3.DkdaOQ.DBlH5HWt9xM3e2CJF-eM3y832yw");
twelve.login("NDc1NTU0MDE3NzU4NTQzODcy.Dkgt1Q.1VaRupePBlXO-HiFvDjqjJalAZA");
