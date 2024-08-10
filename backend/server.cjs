const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importar CORS

dotenv.config();

const app = express();

// Configurar CORS para permitir solicitudes desde cualquier origen
const allowedOrigins = ['http://localhost:5173', 'https://erickaa3.github.io/corita1'];


app.use(cors({
  origin: '*',  // Permitir todas las solicitudes de cualquier origen
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));





app.use(express.json()); // Para manejar datos JSON

// Conectar a MongoDB
const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Esquema de Mongoose con descripción
const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  image: String, // Guardaremos la imagen en formato base64 por simplicidad
  description: String, // Nuevo campo para la descripción
});

const User = mongoose.model('User', UserSchema);

// Configuración de almacenamiento con multer
const storage = multer.memoryStorage(); // Almacenar la imagen en memoria para convertirla a base64

const upload = multer({ storage: storage });

// Ruta para manejar la carga de archivos
app.post('/upload', upload.single('file'), async (req, res) => {
  const { email, name, phone, description } = req.body;

  if (!req.file) {
    return res.status(400).send('No se ha subido ninguna imagen');
  }

  const imageBase64 = req.file.buffer.toString('base64'); // Convertir la imagen a base64

  const newUser = new User({
    email,
    name,
    phone,
    image: imageBase64,
    description, // Guardar la descripción
  });

  try {
    await newUser.save();
    res.send('Usuario y archivo subidos exitosamente');
  } catch (error) {
    res.status(500).send('Error al guardar en MongoDB');
  }
});
// Ruta para obtener todas las imágenes
app.get('/images', async (req, res) => {
  try {
    const users = await User.find({}, 'email name phone image description'); // Obtener todos los usuarios, con campos específicos
    res.json(users);
  } catch (error) {
    res.status(500).send('Error al obtener imágenes');
  }
});
 
app.get('/', (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Escuchando en el puerto', port);
});
