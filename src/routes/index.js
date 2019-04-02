var expess = require('express');
var router = expess.Router();


router.get('/', (req,res) =>{
  res.render('index',{title: 'Ingetech'});
});

router.get('/crearInforme', (req,res) =>{
  res.render('crearInforme',{title:'Crear Informe'});
});

router.get('/editarInforme', (req,res) =>{
  res.render('editarInforme',{title:'Editar Informe'});
});


module.exports = router;
