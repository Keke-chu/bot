// 걍 디스코드js 불러오는 코드
const Discord = require('discord.js');
const bot = Discord.Client();

// config 불러오기
const config = require('./database/config.json');

// 노래 불러오는 파트
const {Manager} = require('@lavacord/discord.js');
const nodes = {
    id: '1',
    host: 'localhost',
    port: 2333,
    password: "pw"
};
const mainPlayer = new Manager(bot, nodes);

// 에러확인 해줌
mainPlayer.on('error', err => {
    console.error(err);
});

bot.login(token);