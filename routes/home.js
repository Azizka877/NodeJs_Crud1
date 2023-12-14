const express = require('express');
const router = express.Router();
const club = require('../models/Club');

// router.get('/', (req, res, next)=>{
//     res.send('express router is working');
// })
router.get('/', (req, res, next)=>{
    club.find()
    .then((docs)=>{
        res.render('home', {clubs: docs});

    }).catch(err =>{
        console.log('something went wrong with mongoDb');

    })
    
});
router.post('/add', (req, res , next)=>{

    const {nom,players, coach} = req.body
    console.log(nom,players,coach);

    const uclClub = new club({
      nom,
      players,
      coach
    });
    
    uclClub.save()
    .then(() => {
      console.log('Data added successfully');
      res.redirect('/');
    })
    .catch(err => {
      console.log('Something went wrong, please check it:', err);
    });
  
})

//Route to Show UPDATE ELEMENT

router.get('/edit/:id', (req,res,next)=>{
    console.log(req.params.id);
    club.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
    .then((docs)=>{
        res.render('edit', {club : docs});
    }).catch(err=>{
        console.log('Can \'t send edit page and data' );
        next(err);
   
    })
});



//Route  UPDATE ELEMENT
router.post('/edit/:id',(req,res)=>{
club.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(()=>{
     res.redirect('/');
    }).catch(err =>{
     console.log('something went wrong to update your data');
    })
})



//Route Delete UPDATE ELEMENT

router.get('/delete/:id',(req,res, next)=>{
    club.findByIdAndDelete({_id: req.params.id},req.body)
    .then(()=>{
        console.log('Deleted successfuly');
        res.redirect('/');
       }).catch(err =>{
        console.log('something went wrong to update your data');
        next(err);
       })
})







module.exports= router;