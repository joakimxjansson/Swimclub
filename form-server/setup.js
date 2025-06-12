const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
    console.log(" Välkommen till Google Form Setup!");

    const formUrl = await ask("1 Klistra in din Google Forms action-URL:\n> ");
    const numFields = parseInt(await ask("\n Hur många fält vill du använda?\n> "), 10);

    const fields = [];

    for (let i = 0; i < numFields; i++) {
        const name = await ask(`\n Vad heter fält ${i + 1} (t.ex. firstname)?\n> `);
        const entry = await ask(` Vad är entry-ID:t för "${name}" (t.ex. entry.123456)?\n> `);
        fields.push({ name, entry });
    }

    // Skriv .env
    let envContent = `FORM_URL=${formUrl}\n`;
    fields.forEach(f => {
        envContent += `ENTRY_${f.name.toUpperCase()}=${f.entry}\n`;
    });
    fs.writeFileSync('.env', envContent);
    console.log("\n Filen .env skapades!");

    // Skriv formConfig.js (valfritt)
    const configJs = `module.exports = {\n` +
        `  formUrl: process.env.FORM_URL,\n` +
        `  fields: {\n` +
        fields.map(f => `    ${f.name}: process.env.ENTRY_${f.name.toUpperCase()}`).join(',\n') +
        `\n  }\n};\n`;
    fs.writeFileSync('formConfig.js', configJs);
    console.log("✅ Filen formConfig.js skapades!");

    console.log("\n🚀 Klar! Kör din server med:\n   node server.js");
    rl.close();
})();