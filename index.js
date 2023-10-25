const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageMedia, } = require('whatsapp-web.js');
const client = new Client(
  {
    puppeteer: {
      headless: true,
      // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    },
    authStrategy: new LocalAuth({
      clientId: 'TestClient'
    })
  }
);

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('Autenticado');
});

client.on('auth_failure', function () {
  console.error('Falha na autenticação');
});

client.on('change_state', state => {
  console.log('Status de conexão: ', state);
});

client.on('disconnected', (reason) => {
  console.log('Cliente desconectado', reason);
});

let Sinais = [
  "./FotosSinais/sinal (1).jpg",
  "./FotosSinais/sinal (10).jpg",
  "./FotosSinais/sinal (11).jpg",
  "./FotosSinais/sinal (12).jpg",
  "./FotosSinais/sinal (13).jpg",
  "./FotosSinais/sinal (14).jpg",
  "./FotosSinais/sinal (15).jpg",
  "./FotosSinais/sinal (16).jpg",
  "./FotosSinais/sinal (17).jpg",
  "./FotosSinais/sinal (18).jpg",
  "./FotosSinais/sinal (19).jpg",
  "./FotosSinais/sinal (2).jpg",
  "./FotosSinais/sinal (20).jpg",
  "./FotosSinais/sinal (21).jpg",
  "./FotosSinais/sinal (22).jpg",
  "./FotosSinais/sinal (23).jpg",
  "./FotosSinais/sinal (24).jpg",
  "./FotosSinais/sinal (25).jpg",
  "./FotosSinais/sinal (26).jpg",
  "./FotosSinais/sinal (27).jpg",
  "./FotosSinais/sinal (28).jpg",
  "./FotosSinais/sinal (29).jpg",
  "./FotosSinais/sinal (3).jpg",
  "./FotosSinais/sinal (30).jpg",
  "./FotosSinais/sinal (31).jpg",
  "./FotosSinais/sinal (32).jpg",
  "./FotosSinais/sinal (33).jpg",
  "./FotosSinais/sinal (34).jpg",
  "./FotosSinais/sinal (35).jpg",
  "./FotosSinais/sinal (36).jpg",
  "./FotosSinais/sinal (37).jpg",
  "./FotosSinais/sinal (38).jpg",
  "./FotosSinais/sinal (39).jpg",
  "./FotosSinais/sinal (4).jpg",
  "./FotosSinais/sinal (40).jpg",
  "./FotosSinais/sinal (41).jpg",
  "./FotosSinais/sinal (42).jpg",
  "./FotosSinais/sinal (43).jpg",
  "./FotosSinais/sinal (44).jpg",
  "./FotosSinais/sinal (45).jpg",
  "./FotosSinais/sinal (46).jpg",
  "./FotosSinais/sinal (47).jpg",
  "./FotosSinais/sinal (48).jpg",
  "./FotosSinais/sinal (49).jpg",
  "./FotosSinais/sinal (5).jpg",
  "./FotosSinais/sinal (50).jpg",
  "./FotosSinais/sinal (51).jpg",
  "./FotosSinais/sinal (52).jpg",
  "./FotosSinais/sinal (53).jpg",
  "./FotosSinais/sinal (54).jpg",
  "./FotosSinais/sinal (55).jpg",
  "./FotosSinais/sinal (56).jpg",
  "./FotosSinais/sinal (57).jpg",
  "./FotosSinais/sinal (58).jpg",
  "./FotosSinais/sinal (59).jpg",
  "./FotosSinais/sinal (6).jpg",
  "./FotosSinais/sinal (60).jpg",
  "./FotosSinais/sinal (61).jpg",
  "./FotosSinais/sinal (62).jpg",
  "./FotosSinais/sinal (63).jpg",
  "./FotosSinais/sinal (64).jpg",
  "./FotosSinais/sinal (65).jpg",
  "./FotosSinais/sinal (7).jpg",
  "./FotosSinais/sinal (8).jpg",
  "./FotosSinais/sinal (9).jpg",

]

client.on('message', res => {
  if (res.body == 'Boa') {
  console.log(res.id);
  }
})

client.on('ready', async msg => {

  function horaMinutos2(tempo) {
    const now = new Date();
    const expiry = new Date(now.getTime() + tempo * 60 * 1000);
    const hours = String(expiry.getHours()).padStart(2, '0');
    const minutes = String(expiry.getMinutes()).padStart(2, '0');
  
    return `${hours}:${minutes}`
  }

  const canal = '120363193693852238@g.us'
  
  setInterval(() => {
    const indiceAleatorio = Math.floor(Math.random() * Sinais.length);
    const foto = MessageMedia.fromFilePath(Sinais[indiceAleatorio]);

    client.sendMessage(canal, foto, { caption: `
🟢⚔️ Cortes Confirmados ⚔️🟢

🥷 Sala: Ninja Crash  🍰🍩
📲 Plataforma: bit.ly/-BullsBetOficial

⏱ HORÁRIO DOS CORTES ⏱

⚔️ Entrada as ${horaMinutos2(2)}
⚔️ Entrada as ${horaMinutos2(4)}
⚔️ Entrada as ${horaMinutos2(6)}
⚔️ Entrada as ${horaMinutos2(8)}
    `})

  }, 600000)

  setInterval(()=>{
    client.sendMessage(canal,`
✅✅✅ BATEEEEU!! ✅✅✅
    CORTAAAMOS TUDOO⚔️🤑
    `)
  },1140000)


});

client.initialize();


