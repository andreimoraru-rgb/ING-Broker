const fs = require('fs');
const path = require('path');

const emDash = '—';
const enDash = '–';
const hyphen = '-';

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const newContent = content.replace(new RegExp(emDash, 'g'), hyphen).replace(new RegExp(enDash, 'g'), hyphen);
                if (content !== newContent) {
                    fs.writeFileSync(fullPath, newContent);
                    console.log(`Updated: ${fullPath}`);
                }
            } catch (e) {
                console.error(`Error processing ${fullPath}: ${e.message}`);
            }
        }
    }
}

walk('src');
