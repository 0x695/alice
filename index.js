// ALICE //

// IRC //
const Irc = require('irc');

// CHANNEL HOST USER //
const IRC_CHANEL = '#channel';
const IRC_HOST = 'irc.server.ndd';
const IRC_USER = 'Alice';

// BOT NAMES //
const botNames = ['alice','s'];

// START CLIENT //
const ircClient = new Irc.Client(IRC_HOST, IRC_USER, {
channels: [IRC_CHANEL],
debug: true
});

// START LISTENING TO JOINS//
ircClient.addListener('join', function(channel, to,) {
console.log('%s has joined %s', to, channel);

// START WELCOMING //
if(botNames.indexOf(to.toLowerCase()) === -1){
ircClient.say(channel, 'Hello '+ to +', welcome to ' + channel +'.');
}
});

// START LISTENING TO MESSAGES//
ircClient.addListener('message', function(from, to, message) {
console.log('%s => %s: %s', from, to, message);

// START RESPONDING //
if (to.match(/^[#&]/)) {
if (message.match(/morning/i)) {
ircClient.say(to, 'Good morning ' + from + ', today is ' + Date());
}
});
// END //