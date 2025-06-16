# Chat Popup IA - Configuración

## Descripción
Chat popup de IA integrado que actúa como Carlos Freire, desarrollador full stack experto, para ayudar a los usuarios con información sobre los proyectos del portfolio.

## Características
- 🤖 **IA Personalizada**: Actúa como Carlos Freire, desarrollador full stack
- 📱 **Responsive**: Funciona en dispositivos móviles y desktop
- 🎯 **Arrastrable**: Se puede mover por toda la pantalla
- 💬 **Límite de mensajes**: Máximo 10 mensajes para optimizar rendimiento
- 🎨 **Tema adaptable**: Compatible con modo claro y oscuro
- 🔒 **Seguro**: API key protegida con variables de entorno

## Configuración

### 1. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:

```bash
VITE_OPENAI_API_KEY=
```

### 2. Obtener API Key de OpenAI
1. Ve a [OpenAI Platform](https://platform.openai.com/)
2. Inicia sesión o crea una cuenta
3. Ve a "API Keys" en el dashboard
4. Crea una nueva API key
5. Copia la key y pégala en tu archivo `.env`

### 3. Configuración en Vercel
Para deployment en Vercel:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega:
   - **Name**: `VITE_OPENAI_API_KEY`
   - **Value**: Tu API key de OpenAI
   - **Environment**: Production, Preview, Development

## Funcionalidades del Chat

### Personalidad de la IA
- **Nombre**: Carlos Freire
- **Rol**: Desarrollador Full Stack experto
- **Especialidades**: React, Next.js, TypeScript, Node.js, bases de datos
- **Personalidad**: Profesional, amigable, directo y apasionado por la tecnología

### Limitaciones
El chat está diseñado específicamente para:
- ✅ Información sobre proyectos del portfolio
- ✅ Detalles técnicos de los proyectos
- ✅ Tecnologías utilizadas
- ✅ Funcionalidades implementadas
- ✅ Proceso de desarrollo

**NO ayuda con**:
- ❌ Código no relacionado con los proyectos del portfolio
- ❌ Proyectos externos
- ❌ Temas no relacionados con el portfolio

### Controles del Chat
- **Abrir/Cerrar**: Botón flotante en esquina inferior derecha
- **Arrastrar**: Hacer clic y arrastrar desde el header del chat
- **Limpiar**: Botón de refresh para reiniciar la conversación
- **Enviar**: Enter o botón de envío

## Estructura de Archivos
```
src/
├── components/
│   └── chat-popup.tsx    # Componente principal del chat
├── App.tsx              # Integración del chat en la app
└── ...
```

## Tecnologías Utilizadas
- **React 18** con TypeScript
- **Framer Motion** para animaciones y drag & drop
- **HeroUI** para componentes de UI
- **OpenAI API** (GPT-3.5-turbo)
- **Iconify** para iconos

## Costos
El chat utiliza GPT-3.5-turbo con:
- **Max tokens**: 300 por respuesta
- **Temperatura**: 0.7 para respuestas naturales pero consistentes
- **Costo aproximado**: ~$0.002 por conversación de 10 mensajes

## Troubleshooting

### Error: "Error en la respuesta de la API"
- Verifica que la API key esté correctamente configurada
- Asegúrate de tener créditos en tu cuenta de OpenAI
- Revisa que la variable de entorno tenga el prefijo `VITE_`

### El chat no aparece
- Verifica que el componente esté importado en `App.tsx`
- Revisa la consola del navegador para errores

### Problemas de arrastre
- Asegúrate de que Framer Motion esté instalado
- Verifica que no haya conflictos de z-index con otros elementos