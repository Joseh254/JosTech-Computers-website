import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Sequelize } from 'sequelize';

// Initialize Express app
const app = express();

// Access environment variables
const { name: dbName, user: dbUser, password: dbPassword, host: dbHost } = functions.config().database;

// Initialize Sequelize
const sequelize = new Sequelize(`postgresql://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`, {
  dialect: 'postgres',
  logging: false,
});

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'https://jostech-f26ad.web.app/', // Replace with your frontend URL
  credentials: true,
}));
app.use(express.urlencoded({ extended: true }));

// Routes
import productsRouter from './Routes/Products.route.mjs';
import usersRouter from './Routes/usersroute.mjs';
import messagesRouter from './Routes/user_messagesRoute.mjs';
import cartRouter from './Routes/cartRoute.mjs';

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/users', messagesRouter);
app.use('/api/cart', cartRouter);

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connection established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Export the Express app as a Cloud Function
export const api = functions.https.onRequest(app);
