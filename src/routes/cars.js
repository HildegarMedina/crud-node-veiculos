const router = require("express-promise-router")();
const { 
    getAllCars, 
    getCarById, 
    newCar, 
    updateCar, 
    deleteCar 
} = require('../controllers/cars');

router.get("/api/v1/cars", getAllCars);

router.get("/api/v1/cars/:id", getCarById);

router.post("/api/v1/cars", newCar);

router.put("/api/v1/cars/:id", updateCar);

router.delete("/api/v1/cars/:id", deleteCar);

module.exports = router;