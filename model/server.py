from fastapi import FastAPI
import tensorflow as tf
import numpy as np
from tensorflow import keras
from fastapi import FastAPI, File, UploadFile

model = tf.keras.models.load_model('app/my_model.keras')
print("Model Loaded")

class_names = np.array(['Organics', 'Recycables'])

app = FastAPI()

@app.get('/')
def reed_root(): #root
    return {'message': 'Welcome to Wastely'}


@app.post('/predict')
async def predict(image: UploadFile):
    image_bytes = await image.read()
    
    # Example: Save the file locally (optional)
    with open("uploaded_image.jpg", "wb") as f:
        f.write(image_bytes)

    from PIL import Image
    import io
    import numpy as np

    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = img.resize((128, 128))  # Resize to model's input size
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Model input shape

    prediction = model.predict(img_array)
    class_name = class_names[np.argmax(prediction)]

    return {'predicted_class': class_name}