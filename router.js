const router = require("express").Router();

router.post('/save',async function (req,res){
    
    const db = req.app.get('db');
    let alcoho_degree = req.body.alcoho_degree;
    let date = req.body.date;

    let sql = 'INSERT INTO al_esti.sensor(alcoho_degree,date) VALUES(?,?)';
    await db.query(sql,[alcoho_degree,date],async function(err,result){
        if(err){
            console.log(err)
            res.sendStatus(400)
        }
        else{
            console.log(result)
            await res.json({ans:true})
        }
    })
})

router.get('/select',async function(req,res){
    const db = req.app.get('db')
    let id = req.query.id;
    let sql = 'SELECT * FROM al_esti.sensor';
    await db.query(sql,[id],(err,rows)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }
        else{
            res.status(200).json({ans:true,rows:rows});
            console.log(rows)
        }
    })
})
router.get('/select_0.03',async function(req,res){
    const db = req.app.get('db')
    let id = req.query.id;
    let sql = 'SELECT * FROM al_esti.sensor WHERE alcoho_degree > 0.03';
    await db.query(sql,[id],(err,rows)=>{
        if(err){
            console.log(err)
            res.sendStatus(400)
        }
        else{
            res.status(200).json({ans:true,rows:rows});
            console.log(rows)
        }
    })
})
module.exports = router;