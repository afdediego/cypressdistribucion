// Import commands.js using ES2015 syntax:
import './commands'

// Ignorar el error de KTAppOptions
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('KTAppOptions')) {
        return false;
    }
    return true;
}); 