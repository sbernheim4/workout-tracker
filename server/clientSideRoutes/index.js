"use strict";
/* Declare all your client side routes here so that if the user refreshes the page, the server will send
 * them the HTML file which will allow the react router to then continue handling the request
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
const router = express_1.Router();
const routes = [
    '/',
    '/subpage'
];
router.get("*", (req, res, next) => {
    if (routes.includes(req.url)) {
        res.sendFile(path_1.join(__dirname, '../public/index.html'));
    }
    else {
        next();
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map