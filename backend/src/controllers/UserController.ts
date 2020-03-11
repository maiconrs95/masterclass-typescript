import { Request, Response } from 'express';

const users = [
    { id: 1, name: 'Maicon Silva', email: 'maiconrs95@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
};
