# PCMart

PCMart is a full stack web application that is created with the MERN Stack. It is an e-Commerce app for PC Components, created as a personal side project.

## Features

- Uses JSON Web Tokens for authentication
- Uses Redux for global state management
- Uses [Toasts](https://www.npmjs.com/package/react-toastify 'React Toastify') for Cart Operations
- Uses [React-Spring](https://github.com/pmndrs/react-spring) for animations
- Uses Bootstrap (React-Bootstrap) and Bootstrap icons for styling
- Semi-Responsive (Big Screen and Small Screen Support)

### This App is live at [https://pcmart.herokuapp.com](https://pcmart.herokuapp.com/)

## Installation

```bash
mkdir PCMart
git clone https://github.com/apassan23/PCMart_ecommerce_mern.git PCMart
cd PCMart/
npm install && npm install --prefix client
```

### Configuring MongoDB and JWT

```bash
cd PCMart/
mkdir config
touch config/default.json
```

Open up `default.json` in a text editor and paste the following:

```json
{
  "mongoURI": "path/to/your/mongoDB/database",
  "jwtSecret": "yourJWTSecret"
}
```

### Running the app

For running both the backend server and the frontend server:

#### `npm run dev`

For running only the frontend server:

#### `npm run client`

For running the backend server:

#### `npm run server`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
