const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/pages');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if (file.endsWith('.tsx')) {
            const filePath = path.join(directoryPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            const regex = /<motion\.button\s+initial={{ opacity: 0, x: -20 }}\s+animate={{ opacity: 1, x: 0 }}\s+onClick={\(\) => navigate\((.*?)\)}\s+className="flex items-center gap-2 px-6 py-3 bg-white\/80 backdrop-blur-md border border-gray-100 text-\[10px\] font-bold uppercase tracking-\[0\.2em\] text-secondary hover:text-primary transition-all shadow-sm hover:shadow-xl group"\s*>\s*<ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" \/>\s*(.*?)\s*<\/motion\.button>/g;
            
            if (regex.test(content)) {
                content = content.replace(regex, `<motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate($1)}
          className="flex items-center gap-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white transition-all shadow-lg hover:shadow-xl group"
        >
          <div className="bg-white text-secondary rounded-full p-1.5 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={14} />
          </div>
          <span className="tracking-wide">
            $2
          </span>
        </motion.button>`);
                fs.writeFileSync(filePath, content);
                console.log('Updated ' + file);
            }
        }
    });
});
