const dev = 'http://localhost:3001';
const prod = 'https://cvhshack.herokuapp.com';

export const server = process.env.NODE_ENV === 'production' ? prod : dev;
