import os
from PIL import Image, ImageEnhance, ImageFilter
from rembg import remove

images_dir = r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\public\images\profiles"

lawyers = [
    "양영희 변호사.jpg",
    "장병우 변호사.jpg",
    "김정웅 변호사.jpg",
    "곽현준 변호사_new.jpg",
    "백동근 변호사.jpg",
    "양이림 변호사.jpg"
]

# 한지(Hanji) 색상: #f7f3ec
bg_color = (247, 243, 236)

for file_name in lawyers:
    input_path = os.path.join(images_dir, file_name)
    if not os.path.exists(input_path):
        print(f"Skipping {file_name}, not found.")
        continue
    
    # We overwrite the previously unified images so we don't have to change data.ts
    output_name = file_name.replace(".jpg", "_unified.jpg").replace(".png", "_unified.jpg")
    output_path = os.path.join(images_dir, output_name)
    
    print(f"Processing {file_name}...")
    
    # 1. Read the original image
    img = Image.open(input_path).convert("RGB")
    
    # 2. Remove background (returns RGBA)
    img_no_bg = remove(img)
    
    # 3. Enhance Brightness and Contrast of the person
    # We must split alpha, enhance RGB, and merge back to avoid enhancing transparent pixels weirdly
    r, g, b, a = img_no_bg.split()
    rgb_img = Image.merge("RGB", (r, g, b))
    
    enhancer_b = ImageEnhance.Brightness(rgb_img)
    rgb_img = enhancer_b.enhance(1.15) # 15% brighter
    
    enhancer_c = ImageEnhance.Contrast(rgb_img)
    rgb_img = enhancer_c.enhance(1.05) # 5% more contrast
    
    # Merge enhanced RGB back with original Alpha mask
    enhanced_fg = Image.merge("RGBA", (*rgb_img.split(), a))
    
    # 4. Create Drop Shadow
    # Create a black layer using the alpha channel
    shadow_layer = Image.new("RGBA", img_no_bg.size, (0, 0, 0, 0))
    # Fill shadow color (soft dark brown/black) with the alpha of the person
    shadow_color = Image.new("RGBA", img_no_bg.size, (30, 25, 20, 100)) # 100/255 opacity
    shadow_layer = Image.composite(shadow_color, shadow_layer, a)
    
    # Blur the shadow
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(15))
    
    # 5. Create final background
    final_img = Image.new("RGB", img.size, bg_color)
    
    # Paste shadow with an offset (e.g., down 10px)
    # PIL paste with mask handles the alpha channel correctly
    shadow_offset_y = 15
    final_img.paste(shadow_layer, (0, shadow_offset_y), shadow_layer)
    
    # 6. Paste the enhanced foreground
    final_img.paste(enhanced_fg, (0, 0), enhanced_fg)
    
    # Save
    final_img.save(output_path, quality=95)
    print(f"Saved highly enhanced {output_name}")

print("Done processing all premium images.")
