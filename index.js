"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
console.log('ㅋ');
const DB = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testIA'
});
DB.connect(() => {
    console.log('DB시작');
});
DB.query('select * from user_information', (err, result) => {
    if (err)
        throw err;
    console.log(result);
});
console.log('ㅋ');
//# sourceMappingURL=index.js.map