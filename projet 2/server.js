//console.log('node fonctionne !');
const express = require('express');
const app = express();

//Prise en compte du dossier contenant les fichiers statiques
app.use(express.static('static'));
//app.use(express.static('index.html'));


//on définit une root
app.get('/', (req, res)=>{
  res.send('Tu es arriver ici a la racine');

})
app.get('/players/json', (req, res)=>{
  let players=[
    {firstname: 'Paul',lastName:'Pogba', num:6},
    {firstname: 'Paolo',lastName:'Dybala', num:10},
    {firstname: 'Pavel',lastName:'Nedved', num:6}
  ];

  //json (1)est une méthode qui convertit les donées fournies
  // en entrée en string au format json
  //(2) envoie les données convertit en chaine de caractère au format
  res.json(players)

})
app.get('/fruits/json', (req, res)=>{
  let fruits=[
    {titreFr: 'Nom FR' ,nomFr: 'Pomme',nomEn:'Apple', nomIt:'Mela'},
    {titreEn: 'Nom EN',nomFr: 'Raisin',nomEn:'Grape', nomIt:'Vin'},
    {titreIt: 'Nom It', nomFr: 'Melon',nomEn:'watermelon', nomIt:'Melone'},
  ];
  res.json(fruits)
})

app.get('/players', (req, res)=>{
  let players= `
  <ul>
  <li>Paul P</li>
  <li>Ngolo K</li>
  <li>Antoine G</li>`

  res.send(players);
})

app.get('/test', (req, res)=>{
  let html = `
  <!DOCTYPE html>
  <html>
    <head><title>Test</title></head>
    <body>
      <h1>Test</h1>
  </html>`
  res.send(html);

})


app.listen(4000, ()=>{
  console.log('server écoutant le port 4000, Ctrl + c pour le stopper');
});
