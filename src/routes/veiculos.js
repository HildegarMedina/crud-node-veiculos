const router = require("express-promise-router")();
const { 
    getAllCars, 
    getCar, 
    newCar, 
    updateCar, 
    DeleteCar 
} = require('../controllers/veiculos');

router.get("/api/v1/veiculos", getAllCars);


module.exports = router;