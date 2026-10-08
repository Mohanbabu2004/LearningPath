// Client API Handler
const API_BASE = '/api';

async function fetchAPI(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers: { 'Content-Type': 'application/json', ...options.headers },
            ...options
        });
        return await response.json();
    } catch (error) {
        console.error(`API Error on ${endpoint}:`, error);
        return { success: false, message: error.message };
    }
}
