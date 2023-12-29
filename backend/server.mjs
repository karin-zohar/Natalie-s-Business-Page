import http from 'http';
import path from 'path';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const server = http.createServer(app);

// Express App Config
app.use(cookieParser());
app.use(express.json());

// Enable CORS conditionally based on environment
if (process.env.NODE_ENV === 'development') {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173'
        ],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// Serve static files
app.use(express.static(path.resolve('public')));

// Serve index.html for all routes
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

// Start the server
import { logger } from './services/logger.service.mjs';
const port = process.env.PORT || 3030;
server.listen(port, () => {
    logger.info('Server is running on port: ' + port);
});
