require('../models/database');
const Category = require('../models/Category');


/**
 * GET /
 * Homepage
 */

exports.HomePage = async(req, res)=>{


        try {
                const limitNumber = 5;
                const categories = await Category.find({}).limit(limitNumber);
                res.render('index',{title: 'HomePage',categories });


        } catch (error) {
                res.satus(500).send({message : error.message || "Error Occured"});
        }
        
      
}




// async function insertDymmyCatergoryData(

// ){

// try {
//         await Category.insertMany(

// [
//         {
//                 "name":"Pizza",
//                 "image":"american-food.jpg"

//         },
//         {
//                 "name":"paratha",
//                 "image":"indian-food.jpg"

//         },
//         {
//                 "name":"burger",
//                 "image":"american-food.jpg"

//         },
//         {
//                 "name":"paneer",
//                 "image":"indian-food.jpg"

//         },


// ]);
        
// } catch (error) {
//         console.log('err',+ error);
        
// }
// }
// insertDymmyCatergoryData();