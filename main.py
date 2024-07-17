import os

for root, dirs, files in os.walk("tiles", topdown=False):
    for name in files:
        path = os.path.join(root, name).split(".", -1)[0]
        os.system(f"cwebp -q 50 {path}.png -o {path}.webp")
        os.remove(f"{path}.png")
