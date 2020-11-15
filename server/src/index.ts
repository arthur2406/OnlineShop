import express = require('express');
import { useRoutesForApp } from './routes/index'; 


const app: express.Application = express();

useRoutesForApp(app);

app.listen(3000, () => {
    console.log('Server is running;')
});