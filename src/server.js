import { listen } from './app';

const PORT = process.env.PORT || 3000;
listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
