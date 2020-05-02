import { Request, Response } from 'express';

export default class AuthController {
  static register(req: Request, res: Response) {}
  static login(req: Request, res: Response) {
    return res.send('working');
  }
}
