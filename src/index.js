const { analyzeUrl, generateGherkinTests, createTestPlan } = require('./urlAnalyzer');

async function main(url) {
    try {
        console.log('Analyzing URL:', url);
        const elements = await analyzeUrl(url);
        
        console.log('Generating Gherkin tests...');
        const gherkinTests = generateGherkinTests(elements);
        
        console.log('Creating test plan...');
        createTestPlan(elements, gherkinTests);
        
        console.log('Test plan created successfully!');
        
        // Generar archivos de prueba de Cypress
        generateCypressTests(elements);
    } catch (error) {
        console.error('Error:', error);
    }
}

function generateCypressTests(elements) {
    // Esta función se implementará en el siguiente paso
}

// Uso: node src/index.js https://ejemplo.com
const url = process.argv[2];
if (!url) {
    console.error('Please provide a URL as an argument');
    process.exit(1);
}

main(url); 