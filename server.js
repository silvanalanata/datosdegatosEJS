const myexpress = require('express')

const myapp = myexpress()

myapp.use(myexpress.static(__dirname + "/static"));

myapp.set('views', __dirname + '/views'); 

myapp.set('view engine', 'ejs');
let gatos_array = [
    {id: 100, favorite_food: "spaguetti", edad: 3, nombre: "pepito", imagen: "img/gato1.jpg"},
    {id: 200, favorite_food: "carne", edad: 5, nombre: "lupi", imagen: "img/gato2.jpg"},
];

myapp.get('/', function(request, response) {
    response.render('index'); 
  })

myapp.get('/gatos', function(request, response) {
    response.render('gatos',{gatos: gatos_array}); 
  })


  myapp.get('/gatos/:id', function(request, response) {
   let id = request.params.id
   let gato_id=gatos_array[id]
   
 
   response.render('gatos_detalle',{gatos: gato_id}); 
  })



myapp.listen(8000, function() {
    console.log('servidor ejecutandose en  http://localhost:8000');
});

