"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const User_1 = __importDefault(require("../database/models/User"));
const Journal_1 = __importDefault(require("../database/models/Journal"));
//initialize
database_1.sequelize.sync();
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
app.get('/clients', (req, res) => {
    const journal = Journal_1.default.findAll({ raw: true });
    res.send(journal);
});
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(3000);
