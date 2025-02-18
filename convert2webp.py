from PIL import Image
from glob import glob
import os

# image_list = glob('public/gallery/raw/*.jpg')
# image_list = glob('public/banner/raw/*.jpg')
# image_list = glob('public/profile/crop/*.jpeg')
image_list = glob('public/our_wedding/crop/*.jpg')
print(len(image_list))

for i, image in enumerate(image_list):
    image_name = os.path.basename(image).split('.')[0]
    new_name = f'public/our_wedding/webp/{image_name}.webp'
    with Image.open(image) as image:
        image.save(new_name, format='WEBP', quality=30)
