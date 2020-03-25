import { Request, Response } from 'express';
import EmailService from '../services/Email';

const users = [
    { id: 1, name: 'Maicon Silva', email: 'maiconrs95@gmail.com' },
    { id: 2, name: 'jac Silva', email: 'jacsilva@gmail.com' },
    { id: 3, name: 'Soraia Silva', email: 'soraia@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async store(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Maicon Silva',
                email: 'maiconrs95@gmail.com'
            },
            message: {
                subject: 'Bem-Vindo ao Sistema',
                body: 'Seja bem-vindo.'
            }
        });

        return res.status(201).send();
    },
};
