import NodeCache from "node-cache";

// Crear una instancia de cache con TTL por defecto de 24 horas
const cache = new NodeCache({ stdTTL: 24 * 60 * 60 });

export default cache;