// ===========================================
// Lógica de Navegación y Vistas (Panel Switching)
// ===========================================

function showPanel(panelId, btnElement) {
    // 1. Ocultar todos los paneles y desactivar botones
    document.querySelectorAll('.panel-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // 2. Mostrar el panel y activar el botón seleccionado
    const target = document.getElementById(panelId);
    if(target) target.classList.add('active');
    if(btnElement) btnElement.classList.add('active');

    // 3. Cerrar menú móvil si está abierto
    closeMobileMenu();
}


// ===========================================
// Lógica de Menú Móvil (Hamburguesa)
// ===========================================

const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menuToggle');

function closeMobileMenu() {
    if(window.innerWidth <= 992) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }
}

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', closeMobileMenu);


// ===========================================
// Lógica de TIEMPO REAL (Ejemplo)
// Aquí es donde inyectarás tus funciones asíncronas
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar el estado inicial del Bot
    loadBotStatus();
    
    // 2. Simular la conexión en tiempo real (WebSockets / API Polling)
    setInterval(updateRealTimeData, 5000); // Actualiza cada 5 segundos

    // Listener para el botón de Guardar Cambios
    const saveButton = document.querySelector('#server-config .btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', saveServerConfig);
    }
});

/**
 * Función que carga los datos de la base de datos (Firebase/Backend) 
 * y actualiza el Dashboard.
 */
function loadBotStatus() {
    console.log("-> 📡 Consultando la API de FarmeX para el estado en tiempo real...");
    
    // Aquí iría tu fetch/axios para obtener:
    // - Latencia
    // - Créditos de IA restantes
    // - Servidores vinculados
    
    // Ejemplo de actualización:
    const iaUsageElement = document.querySelector('.app-grid .app-card:nth-child(2) .app-status');
    if (iaUsageElement) {
        // Simulación de que la API devuelve '125 / 500'
        iaUsageElement.textContent = "125 / 500"; 
    }

    const latencyElement = document.querySelector('.app-grid .app-card:nth-child(1) .app-status');
    if (latencyElement) {
        // Simulación de que la API devuelve '35ms'
        latencyElement.textContent = "35ms"; 
        latencyElement.style.color = 'yellow';
    }
}

/**
 * Función que guarda la configuración del Bot al presionar el botón
 */
function saveServerConfig() {
    const welcomeChannel = document.querySelector('#server-config .form-select').value;
    const starMin = document.querySelector('#server-config input[type="number"]').value;

    console.log(`-> 💾 Guardando configuración en Firebase/Backend:`);
    console.log(`Canal de Bienvenida: ${welcomeChannel}`);
    console.log(`Mínimo de Estrellas: ${starMin}`);
    
    // Aquí iría tu fetch/axios para hacer un POST a tu API.
    alert('Configuración guardada exitosamente (Simulado).');
}

/**
 * Función que actualiza datos que cambian constantemente (ej. Latencia)
 */
function updateRealTimeData() {
    // Simulación de latencia que cambia en tiempo real
    const newLatency = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    const latencyElement = document.querySelector('.app-grid .app-card:nth-child(1) .app-status');
    if (latencyElement) {
        latencyElement.textContent = `${newLatency}ms`;
        latencyElement.style.color = newLatency > 35 ? 'red' : var(--primary);
    }
}
