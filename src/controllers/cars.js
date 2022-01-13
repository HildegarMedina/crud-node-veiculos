const Cars = require("../models/cars");
const { verifyEmptyData } = require('../utils/utils');

module.exports = {

    getAllCars: async (req, res, next) => {
        const cars = await Cars.find({});
        const response = {
            count: cars.length,
            items: cars
        }
        res.status(200).json(response);
    },

    newCar: async (req, res, next) => {
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;
        const verify = verifyEmptyData({placa, chassi, renavam, modelo, marca, ano});
        if(verify.result) {
            const newCar = new Cars(req.body);
            const car = await newCar.save();
            res.status(201).json({
                id: car._id
            });
        }else {
            res.status(400).json({
                message: `Field ${verify.value} is required`
            });
        }
    },

    getCar: async (req, res, next) => {

    },

    updateCar: async (req, res, next) => {

    },

    DeleteCar: async (req, res, next) => {

    },


};