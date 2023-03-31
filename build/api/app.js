"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { sequelize } from '../database'
const User_1 = __importDefault(require("../database/models/User"));
const Clients_1 = __importDefault(require("../database/models/Clients"));
const database_1 = require("../database");
//initialize
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//api
app.post('/users', (req, res) => {
    console.log(req.body);
    User_1.default.create(req.body).then(() => {
        res.send('done');
    });
});
app.get('/reviews', (req, res) => {
    const reviews = Clients_1.default.findAll({ raw: true });
    res.send(reviews);
});
app.get('/', (req, res) => {
    res.send('hello');
});
database_1.sequelize.sync();
app.listen(3000);
