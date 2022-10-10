
import './loadEnv.js';
import express from 'express';
import casesRoutes from './routes/cases.routes.js';
import notesRoutes from './routes/notes.routes.js';
import ftpRoutes from './routes/ftp.routes.js';
import cors from 'cors';

const app = express();


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, POST, PUT, DELETE, OPTIONS, HEAD",
  optionsSuccessStatus: 200
}

//Middlewares
app.use(express.json())
app.use(cors(corsOptions));

app.use(casesRoutes)
app.use(notesRoutes)
app.use(ftpRoutes)

export default app;