const fs = require('fs');
const path = require('path');

function findDashes(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== 'dist') {
                findDashes(fullPath);
            }
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                if (line.includes('—') || line.includes('–')) {
                    console.log(`File: ${fullPath}, Line: ${index + 1}`);
                    if (line.includes('—')) console.log('  Found em-dash (—)');
                    if (line.includes('–')) console.log('  Found en-dash (–)');
                    console.log(`  Content: ${line.trim()}`);
                }
            });
        }
    }
}

findDashes('src');
