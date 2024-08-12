const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Permitir estos métodos
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Permitir estos encabezados
  next();
});
app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para manejar datos de formularios

// Conectar a MongoDB
const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema de Mongoose
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  image: String,
  description: String,
  options: [String], // Array para las opciones de edición seleccionadas
});

const User = mongoose.model('User', UserSchema);

// Configuración de almacenamiento con multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para manejar la carga de archivos
app.post('/upload', upload.single('file'), async (req, res) => {
  const { email, name, phone, description } = req.body;
  const options = Object.values(req.body).filter((key) => key.startsWith('options[')).map((option) => option);

  if (!req.file) {
    return res.status(400).send('No se ha subido ninguna imagen');
  }

  const imageBase64 = req.file.buffer.toString('base64');

  const newUser = new User({
    email,
    name,
    phone,
    image: imageBase64,
    description,
    options, // Guardar las opciones de edición seleccionadas
  });

  try {
    await newUser.save();
    res.send('Usuario y archivo subidos exitosamente');
  } catch (error) {
    res.status(500).send('Error al guardar en MongoDB');
  }
});

app.get('/images', async (req, res) => {
  try {
    const users = await User.find({}, 'email name phone image description options');
    res.json(users);
  } catch (error) {
    res.status(500).send('Error al obtener imágenes');
  }
});

app.get('/', (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Escuchando en el puerto', port);
});
