/**
 * GET /
 * Homepage
 */

exports.HomePage = async(req, res)=>{
        
        res.render('index',{title: 'HomePage'});
}