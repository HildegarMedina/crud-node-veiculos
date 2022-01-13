const router = require("express-promise-router")();
const { 
    getAllCars, 
    getCar, 
    newCar, 
    updateCar, 
    DeleteCar 
} = require('../controllers/cars');

router.get("/api/v1/cars", getAllCars);

router.post("/api/v1/cars", newCar);


module.exports = router;