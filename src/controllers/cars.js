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

    getCarById: async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await Cars.findById(id);
            if (user) {
                res.status(200).json(user);
            }
            res.status(404).json();
        } catch (error) {
            res.status(500).json({
                "message": "invalid id"
            });
        }
    },

    newCar: async (req, res, next) => {
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;
        const verify = verifyEmptyData({placa, chassi, renavam, modelo, marca, ano});
        if(verify.result) {
            try {
                const newCar = new Cars(req.body);
                const car = await newCar.save();
                res.status(201).json({
                    id: car._id
                });
            } catch (error) {
                res.status(500).json({
                    message: "Server problem, check the connection to the database."
                });
            }
        }else {
            res.status(400).json({
                message: `Field ${verify.value} is required`
            });
        }
    },

    updateCar: async (req, res, next) => {
        const { id } = req.params;
        const { placa, chassi, renavam, modelo, marca, ano } = req.body;
        const verify = verifyEmptyData({placa, chassi, renavam, modelo, marca, ano});
        if(verify.result) {
            const newCar = req.body;
            try {
                const car = await Cars.findById(id);
                if (!car) {
                    res.status(404).json({
                        "message": "user not found"
                    });
                }
                await Cars.findByIdAndUpdate(id, newCar);
                res.status(200).json();
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    message: "Server problem, check the connection to the database."
                });
            }
        }else {
            res.status(400).json({
                message: `Field ${verify.value} is required`
            });
        }
    },

    DeleteCar: async (req, res, next) => {

    },


};