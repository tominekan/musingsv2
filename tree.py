import os

for root, subdir, files in os.walk("."):
    print(f"Inside the {'root' if root == '.' else root} directory")
    print(f"{'' if len(subdir) == 0 else subdir}")
    
    for file in files:
        print(f"    - {file}")
    print("————————————————————————————————————————————————————————————————————————————————————————")
    if ".git" in subdir:
        subdir.remove(".git")
    if "__pycache__" in subdir:
        subdir.remove("__pycache__")
    if "node_modules" in subdir:
        subdir.remove("node_modules")
    if ".venv" in subdir:
        subdir.remove(".venv")
