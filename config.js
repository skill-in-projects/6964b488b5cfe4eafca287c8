// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi6964b488b5cfe4eafca287c8-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
