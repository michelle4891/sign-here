import os
from flask import Flask
from flask_cors import CORS
from flask import jsonify
from flask import request, Response
import cohere
from qdrant_client import QdrantClient
from qdrant_client.http import models
from qdrant_client.http.models import PointStruct
app = Flask(__name__)
CORS(app)

@app.route("/embed", methods = ['POST'])
def home():
    data = request.get_json()
    text = data['body']
    co = cohere.Client(os.environ.get("COHERE_KEY"))
    qdrant_client = QdrantClient(
    "https://a370cbc5-fa9c-4dad-a685-0b9f34344d80.us-east-1-0.aws.cloud.qdrant.io", 
    api_key= os.environ.get("QDRANT_KEY"),
    )
    qdrant_client.recreate_collection(
    collection_name="EmbededChunks",
    vectors_config=models.VectorParams(size=4096, distance=models.Distance.COSINE),
    )
    chunks = []
    while len(text) > 500:
        last_period_index = text[:500].rfind('.')
        if last_period_index == -1:
            last_period_index = 500
        chunks.append(text[:last_period_index])
        text = text[last_period_index+1:]
    chunks.append(text)
    points = []
    i = 1
    for chunk in chunks:
        i += 1
        embeds = co.embed(texts=[chunk], model = 'large', truncate= 'START').embeddings
        vectors = [float(x) for x in embeds[0]]
        points.append(PointStruct(id=i, vector=vectors, payload={"text": chunk})) 
    operation_info = qdrant_client.upsert(
        collection_name="EmbededChunks",
        wait=True,
        points=points
        )
    
    # response_body = {
    #     "Status": operation_info.status
    # }
    return operation_info.status

@app.route("/question", methods = ['POST'])
def get_question():
    question = request.get_json()
    print(question)