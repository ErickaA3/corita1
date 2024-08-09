const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importar CORS

dotenv.config();

const app = express();

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors({
  origin: 'http://localhost:5173',  // Permite solicitudes desde tu frontend
  methods: ['GET', 'POST'],         // Métodos permitidos
  allowedHeaders: ['Content-Type']  // Encabezados permitidos
}));

app.use(express.json()); // Para manejar datos JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
