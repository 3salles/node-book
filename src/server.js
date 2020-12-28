import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => response.send('Hello World!'));

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000!')
});