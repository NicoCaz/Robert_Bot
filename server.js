const Discord = require("discord.js");
const client = new Discord.Client();
var opus = require( 'node-opus');
var dispatcher
var connection

function presence(){
  client.user.setPresence({
     status: "online",
     game: {
        name: "Estudiando Quimica",
     }
  });
}
client.on("ready", () => {
    console.log("Lucho se la come");
    presence();
  });
 
 client.on("guildMemberAdd", mienmbro => {
  var canal = client.channels.find(channel=> channel.id ===("377880846952038412"))
  canal.send("Bienvenido <@" + miembro.id + "> al servidor, recuerda leer las reglas papu")
 });
 
 client.on("message", message => {
    console.log(message.content) 
 })
  
 client.on("message", async message => {
   if(message.content === "*stop" && connection.channel === message.member.voice.channel){
    dispatcher.destroy();
    connection.disconnect();
   }
  if(message.content === "*jojo"){
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
    }
    dispatcher = connection.play('Giorno.mp3');
  }
  if(message.content ==="*dio"){
    if (message.member.voice.channel) {
      connection =  await message.member.voice.channel.join();
    }
    dispatcher=connection.play('DIO.mp3')
  }
 })
 



 client.login("NzA0NDY0NzIwNzM1ODk1NzAy.Xqdj1A.oI4hRtIipp7ahsnO2Bn3Kp616B4");