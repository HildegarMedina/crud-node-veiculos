require('dotenv').config();
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const ObjectId = require('mongoose').Types.ObjectId;
const carExample = require('./mock/carExample');

chai.use(chaiHttp);

const url = 'http://localhost:' + process.env.PORT || 8000;
var idCar = 0;

describe('Cars',()=>{

    describe('/POST cars', () => {

        it('should add one car', (done) => {
            chai.request(url)
                .post('/api/v1/cars')
                .send(carExample)
                .end(function(err,res){
                    idCar = res.body.id;
                    expect(ObjectId.isValid(idCar)).to.be.true;
                    expect(res).to.have.status(201);
                done();
            });
        });

        it('should prevent adding due to lack of data', (done) => {
            chai.request(url)
                .post('/api/v1/cars')
                .send({})
                .end(function(err,res){
                    expect(res).to.have.status(400);
                done();
            });
        });

    });

    describe('/GET cars', () => {

        it('should return all cars', (done) => {
            chai.request(url)
                .get('/api/v1/cars')
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body.count).to.be.greaterThan(0);
                done();
            });
        });

        it('should return one car', (done) => {
            chai.request(url)
                .get(`/api/v1/cars/${idCar}`)
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body._id).to.be.equal(idCar);
                done();
            });
        });

        it('should not return a car', (done) => {
            chai.request(url)
                .get(`/api/v1/cars/microsoft123`)
                .end( function(err,res){
                    expect(res).to.have.status(404);
                done();
            });
        });

    });

    describe('/PUT cars', () => {

        before(() => {
            carExample.ano = 2021;
        });

        it('should update one car', (done) => {
            chai.request(url)
                .put(`/api/v1/cars/${idCar}`)
                .send(carExample)
                .end(function(err,res){
                    expect(res).to.have.status(200);
                done();
            });
        });

        it('should prevent update due to lack of data', (done) => {
            chai.request(url)
                .put(`/api/v1/cars/${idCar}`)
                .send({})
                .end(function(err,res){
                    expect(res).to.have.status(400);
                done();
            });
        });

    });

    describe('/DELETE cars', () => {

        it('should delete one car', (done) => {
            chai.request(url)
                .delete(`/api/v1/cars/${idCar}`)
                .end(function(err,res){
                    expect(res).to.have.status(200);
                done();
            });
        });

        it("should not delete a car because it doesn't exist", (done) => {
            chai.request(url)
                .delete(`/api/v1/cars/${idCar}`)
                .end(function(err,res){
                    expect(res).to.have.status(404);
                done();
            });
        });

    });

});