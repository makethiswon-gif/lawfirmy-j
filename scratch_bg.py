import os
from PIL import Image, ImageDraw
from rembg import remove
import numpy as np

images_dir = r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\public\images\profiles"

lawyers = [
    "양영희 변호사.jpg",
    "장병우 변호사.jpg",
    "김정웅 변호사.jpg",
    "곽현준 변호사_new.jpg",
    "백동근 변호사.jpg",
    "양이림 변호사.jpg"
]

# 1. First, analyze the background of 곽현준 변호사_new.jpg
kwak_path = os.path.join(images_dir, "곽현준 변호사_new.jpg")
kwak_img = Image.open(kwak_path).convert("RGB")

# Get average color of the top 10% of the image to represent the background
width, height = kwak_img.size
top_region = kwak_img.crop((0, 0, width, int(height * 0.1)))
avg_color = np.array(top_region).mean(axis=(0,1))
bg_color = (int(avg_color[0]), int(avg_color[1]), int(avg_color[2]))

print(f"Detected background color from Kwak's photo: {bg_color}")

# 2. Process all images
for file_name in lawyers:
    input_path = os.path.join(images_dir, file_name)
    if not os.path.exists(input_path):
        print(f"Skipping {file_name}, not found.")
        continue
    
    output_name = file_name.replace(".jpg", "_unified.jpg").replace(".png", "_unified.jpg")
    output_path = os.path.join(images_dir, output_name)
    
    print(f"Processing {file_name}...")
    
    # Read the image
    img = Image.open(input_path).convert("RGB")
    
    # Remove background (returns RGBA with transparent background)
    img_no_bg = remove(img)
    
    # Create a new image with the unified background color
    unified_bg = Image.new("RGB", img.size, bg_color)
    
    # Paste the foreground onto the unified background using the alpha channel as mask
    unified_bg.paste(img_no_bg, (0,0), img_no_bg)
    
    # Save the result
    unified_bg.save(output_path, quality=95)
    print(f"Saved {output_name}")

print("Done processing all images.")
