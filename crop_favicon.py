from PIL import Image

def generate_favicon():
    try:
        img = Image.open('public/logo.png')
        # get bounding box of non-transparent content
        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            
            # Make it perfectly square so the browser tab fills it up as much as possible
            width, height = cropped.size
            size = max(width, height)
            square = Image.new("RGBA", (size, size), (255, 255, 255, 0))
            offset = ((size - width) // 2, (size - height) // 2)
            square.paste(cropped, offset)
            
            square.save('public/favicon.png')
            print("Favicon generated successfully.")
        else:
            print("Image is entirely transparent.")
    except Exception as e:
        print(f"Error generating favicon: {e}")

if __name__ == "__main__":
    generate_favicon()
