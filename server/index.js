"use strict";
/* eslint no-undefined: "off" */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
const mongoose_1 = __importDefault(require("mongoose"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const chalk_1 = __importDefault(require("chalk"));
const db_1 = __importDefault(require("./db"));
const logger_1 = __importDefault(require("./logger"));
const app = express_1.default();
const PORT = process.env.PORT;
/****************** Sessions ******************/
const sessionInfo = express_session_1.default({
    secret: 'YOUR_SECRET_HERE',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
});
if (process.env.DB_URI) {
    // Connect to the DB
    mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
    // Use mongo for session store
    const sessionStore = connect_mongo_1.default(express_session_1.default);
    sessionInfo['store'] = new sessionStore({ mongooseConnection: mongoose_1.default.connection });
}
app.use(sessionInfo);
/****************** Server Options ******************/
const cacheTime = 172800000; // 2 Days in ms - Tells clients to cache static files
app.use(helmet_1.default()); // Sets some good default headers
app.use(compression_1.default()); // Enables gzip compression
app.use(body_parser_1.default.json()); // Lets express handle JSON encoded data sent on the body of requests
app.use(body_parser_1.default.urlencoded({ extended: true }));
/****************** Serve Static Files --> JS, CSS, IMAGES ETC ******************/
app.use(express_1.default.static(path_1.default.join(__dirname, '../public'), { maxAge: cacheTime }));
/****************** Log Requests ******************/
app.use('*', (req, _res, next) => {
    logger_1.default.log({
        level: 'info',
        message: chalk_1.default.red(`\nREQUEST ${JSON.stringify(req.method)} ${req.path}\n`) + chalk_1.default.yellow(`QUERY ${JSON.stringify(req.query)}\n`) + chalk_1.default.cyan(`BODY: ${JSON.stringify(req.body)}`)
    });
    next();
});
/****************** Route Handling ******************/
// Use api.js for any and all requests made to /api
const api_1 = __importDefault(require("./api"));
app.use('/api', api_1.default);
const pwa_1 = __importDefault(require("./pwa"));
app.use('/pwa', pwa_1.default);
app.use('/*', (_req, res) => {
    res.sendFile(path_1.default.resolve("./public/index.html"));
});
// Return a 404 page for all other requests - This should be the last get/put/post/delete/all/use call for app
app.use("*", (_req, res) => {
    res.status(404).send(`<h1>404 Page Not Found</h1>`);
});
/****************** Start the Server and DB (if DB_URI env var is set) ******************/
if (process.env.DB_URI && process.env.DB_URI !== '') {
    db_1.default().then(() => {
        startServer();
    }).catch(err => {
        console.log(err);
    });
}
else {
    console.log(chalk_1.default.red(`
		Process.env.DB_URI is undefined (this should be set in your .env file).
		Skipping opening connection to DB.
		Sessions are being stored in memory`));
    startServer();
}
function startServer() {
    app.listen(PORT, () => {
        console.log(chalk_1.default.blue(`App is live on ${process.env.DEV_BASE_URL || 'localhost:' + PORT}`));
    });
}
//# sourceMappingURL=index.js.map