const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
    console.log(client.user.id);
    console.log("봇 가동 완료!");
    client.status = 1;
    client.user.setStatus('online')
    client.user.setPresence({
        game: {
            name: '사랑',
            type: "PLAYING",
            url: "http://www.naver.com"
        }
    });
});
 
client.on("message", message => {
  if (message.author.bot == 1 )
  { return 0; }
  if (message.content.indexOf("얼마나 사랑해") != -1 && message.author.id == 549630447605252096) {
    message.reply("겁나 많이 많이 사랑행!!");
    return 0;
  } else if (message.content.indexOf("사랑해?") != -1 && message.author.id == 549630447605252096) {
    message.reply("당연히 사랑하징~~ ㅎㅎ");
    return 0;
  } else if (message.content.indexOf("사랑해") != -1 && message.author.id == 549630447605252096) {
    message.reply("나도 사랑행~~!!");
    return 0;
  }
  if (message.content.indexOf("안녕히") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  } else if (message.content.indexOf("안녕") != -1) {
    message.reply("안녕하세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("저는 이만") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("그럼 이만") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("전 이만") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("나는 이만") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("난 이만") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("저는 20000") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("전 20000") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("나는 20000") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("난 20000") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }  
  if (message.content.indexOf("그럼 20000") != -1) {
    message.reply("안녕히 가세요. "+message.author.username+"님~");
    return 0;
  }
  if (message.content.indexOf("사귄지") != -1) {
    var now = new Date();
    var then = new Date("August 9,2019");
    var gap = now.getTime() - then.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1;
    message.reply("사귄지 " + gap + "일 됐네용!");
    return 0;
  }
  if (message.content.indexOf("전역") != -1) {
    var now = new Date();
    var then = new Date("June 3,2021"); //
    var gap = then.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24)) + 1;
    message.reply("전역까지 " + gap + "일 남았어요..");
    return 0;
  }


  
});

yeah = os.environ["BOT_TOKEN"]

client.login("Njc2Mjc3NDEzMDA4NjM3OTUy.XkQL5g.9nBDV0HC68H-682aIuZtHykQGWA"); 
