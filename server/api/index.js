"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.all("/", (req, _res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});
router.get("*", function (_req, res) {
    res.json({
        "Name": "Samuel"
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map