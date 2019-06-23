"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.all("/", (req, _res, next) => {
    console.log(`PWA: ${req.method} for ${req.url}`);
    next();
});
router.use(express_1.default.static(path_1.default.join(__dirname, './../../pwa')));
exports.default = router;
//# sourceMappingURL=index.js.map