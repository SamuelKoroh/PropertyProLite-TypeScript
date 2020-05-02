import express, { Application, Request, Response } from 'express';
import routes from './routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', routes);
app.get('*', (req: Request, res: Response) => res.send('home'));

const PORT: any = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
