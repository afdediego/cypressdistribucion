const axios = require('axios');
const cheerio = require('cheerio');
const xlsx = require('xlsx');

async function analyzeUrl(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        
        const elements = {
            buttons: [],
            links: [],
            inputs: [],
            forms: []
        };

        // Recolectar botones
        $('button, input[type="button"], input[type="submit"]').each((i, el) => {
            elements.buttons.push({
                type: 'button',
                text: $(el).text().trim() || $(el).val(),
                id: $(el).attr('id'),
                class: $(el).attr('class')
            });
        });

        // Recolectar enlaces
        $('a').each((i, el) => {
            elements.links.push({
                type: 'link',
                text: $(el).text().trim(),
                href: $(el).attr('href'),
                id: $(el).attr('id'),
                class: $(el).attr('class')
            });
        });

        // Recolectar inputs
        $('input:not([type="button"]):not([type="submit"])').each((i, el) => {
            elements.inputs.push({
                type: 'input',
                inputType: $(el).attr('type'),
                name: $(el).attr('name'),
                id: $(el).attr('id'),
                class: $(el).attr('class')
            });
        });

        // Recolectar formularios
        $('form').each((i, el) => {
            elements.forms.push({
                type: 'form',
                action: $(el).attr('action'),
                method: $(el).attr('method'),
                id: $(el).attr('id'),
                class: $(el).attr('class')
            });
        });

        return elements;
    } catch (error) {
        console.error('Error analyzing URL:', error);
        throw error;
    }
}

function generateGherkinTests(elements) {
    let features = [];
    
    // Generar casos de prueba para botones
    elements.buttons.forEach(button => {
        features.push(`
Feature: Button ${button.text || button.id} functionality

  Scenario: Click button ${button.text || button.id}
    Given I am on the website
    When I click the button "${button.text || button.id}"
    Then the action should be performed successfully`);
    });

    // Generar casos de prueba para enlaces
    elements.links.forEach(link => {
        features.push(`
Feature: Link ${link.text || link.href} navigation

  Scenario: Navigate to ${link.text || link.href}
    Given I am on the website
    When I click the link "${link.text || link.href}"
    Then I should be redirected to the correct page`);
    });

    return features.join('\n');
}

function createTestPlan(elements, gherkinTests) {
    const wb = xlsx.utils.book_new();
    
    // Crear hoja para elementos encontrados
    const elementsData = [
        ['Type', 'Text/Name', 'ID', 'Class', 'Additional Info']
    ];

    // Añadir elementos a la tabla
    Object.entries(elements).forEach(([type, items]) => {
        items.forEach(item => {
            elementsData.push([
                type,
                item.text || item.name || '',
                item.id || '',
                item.class || '',
                item.href || item.action || item.inputType || ''
            ]);
        });
    });

    const wsElements = xlsx.utils.aoa_to_sheet(elementsData);
    xlsx.utils.book_append_sheet(wb, wsElements, 'Elements');

    // Crear hoja para casos de prueba Gherkin
    const gherkinData = gherkinTests.split('\n').map(line => [line]);
    const wsGherkin = xlsx.utils.aoa_to_sheet(gherkinData);
    xlsx.utils.book_append_sheet(wb, wsGherkin, 'Test Cases');

    // Guardar archivo
    xlsx.writeFile(wb, 'test-plan.xlsx');
}

module.exports = {
    analyzeUrl,
    generateGherkinTests,
    createTestPlan
}; 