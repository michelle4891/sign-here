# sign-here

sign:here is a natural language chat-bot for legal documents. It allows people to submit their legal documents as context and sign:here will answer any of their questions regarding the documents. The goal of sign:here is to help individuals better understand the legal documents that they are signing. Utilizes semantic search, vector similarity search, and context injection.

![image](https://user-images.githubusercontent.com/63011927/231547159-9cb4ff14-37c8-4adc-b7d0-42e14cc80bd1.png)


## Features and Functions
- Upload legal documents as a PDF
- Ask any question regarding the document

## Tech Stack
- React/Javascript
- Python/Flask
- co:here
- Qdrant

## How it Works
1. Parsing the uploaded document into sections.
2. Creating embeddings for each section using co:here's embeddings API.
3. Storing the embeddings in Qdrant’s vector database.
4. Get a user's question.
5. Embed the user’s question using co:here’s embeddings API. 
6. Query the Qdrant’s database for the most relevant chunks related to the question.
7. Inject these chunks as context for co:here to reference in its answer.
8. Use co:here generate to generate a natural language response to return to the user.



## Systems Design Diagram
![design](https://user-images.githubusercontent.com/63011927/231547643-09c7bb60-e6df-4fac-9907-3bde77c84880.png)
