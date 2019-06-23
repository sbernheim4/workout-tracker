import path from 'path';
import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.all("/", (req: Request, _res: Response, next: NextFunction) => {

	console.log(`PWA: ${req.method} for ${req.url}`);

	next();

});

router.use(express.static(path.join(__dirname, './../../pwa')));

export default router;
