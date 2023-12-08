import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req:any, res:any) => {
  res.send('Hello, TypeScript with Express -w param!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});