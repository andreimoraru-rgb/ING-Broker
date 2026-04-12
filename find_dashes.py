import os

def find_dashes(directory):
    em_dash = '—'
    en_dash = '–'
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.json')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        for i, line in enumerate(lines):
                            if em_dash in line or en_dash in line:
                                print(f"File: {path}, Line: {i+1}")
                                if em_dash in line:
                                    print(f"  Found em-dash (—)")
                                if en_dash in line:
                                    print(f"  Found en-dash (–)")
                                print(f"  Content: {line.strip()}")
                except Exception as e:
                    print(f"Error reading {path}: {e}")

if __name__ == "__main__":
    find_dashes('src')
