import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import Config from "src/config";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor() {}
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers['x-api-key'] !== Config.accessKey) {
            throw new UnauthorizedException('Invalid api key');
        }
        next();
    }
}