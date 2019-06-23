"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
require("./models");
const startDb = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((res) => {
            res(process.env.DB_URI);
        }).then(res => {
            console.log(res);
            return mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
        }).then(() => {
            console.log(chalk_1.default.blue('MongoDB connection opened!'));
        }).catch(err => {
            console.log('Error Caught');
            console.log(err);
            Promise.reject(err);
        });
    });
};
exports.default = startDb;
//# sourceMappingURL=index.js.map