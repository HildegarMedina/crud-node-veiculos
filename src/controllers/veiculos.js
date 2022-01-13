const Veiculos = require("../models/veiculos");

module.exports = {

    getAllCars: async (req, res, next) => {
        const cars = await Veiculos.find({});
        const response = {
            count: cars.length,
            items: cars
        }
        res.status(200).json(response);
    },

    newCar: async (req, res, next) => {

    },

    getCar: async (req, res, next) => {

    },

    updateCar: async (req, res, next) => {

    },

    DeleteCar: async (req, res, next) => {

    },


};