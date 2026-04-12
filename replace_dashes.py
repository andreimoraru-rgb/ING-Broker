import os

def replace_dashes(directory):
    em_dash = '—'
    en_dash = '–'
    hyphen = '-'
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.md')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content.replace(em_dash, hyphen).replace(en_dash, hyphen)
                    
                    if content != new_content:
                        with open(path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    replace_dashes('src')
