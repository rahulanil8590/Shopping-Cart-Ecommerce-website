
module.exports = {
    HomePage : (req, res ,next)=>{
        res.render('index', { title: 'Express' });
    }

}