import React from 'react'
import { FaBook  } from 'react-icons/fa';
import './Universal_Blog.css'
export default function RAG() {
  return (
    <div class="card-rag">
  <div class="Book_icon">
  <FaBook style={{height:'70px',width:'70px'}} />
  </div>
  <div class="card-body_rag">
    <blockquote class="blockquote mb-0">
      <h1>Leveraging LLM for interacting with your data (RAG model):</h1>
      <p>
        Earlier to retrieve data from a database you need to choose correct filter and get a proper response. If it is to search a document, you have open it and use find function to search keyword of interest and read through whether is that what you are looking for else the search continues to other documents. It is hard to imagine getting insights on to the data we have and becoming creative over it. This has changed with machine learning models becoming more predictive to increase sales revenue by recommender systems. Similarly, now we have LLM like ChatGPT, Anthropic, Claude and others which are trained on large data points that can be channelized to generate responses to our queries on our own data. 
      There are multiple ways, and multiple services do the same job but in a different way. For instance, Azure has Open AI service, AWS has bedrock service with many models to use etc. So, How to leverage these models to chat over our data? 
    </p>
    <br />
    <h3>Technology involved:</h3>
    <br />
    <h3>Data Preparation:</h3>
    <br />
    <p>
    It is important to identify what is our data of interest that we use to search for insights. The data can be text, audio, image and video. It can be structured, semi-structure and unstructured data. Depending on whatever the data type is, we have to process them store as vectors in vector Db.
    </p>
    <br />
    <h3>Storing vectors/Embedding generation:</h3>
    <br />
    <img src={`${process.env.PUBLIC_URL}/Blog_pics/rag/rag_ingestion.jpg`} alt="none" />
    <br />
    <br />
    <p>
    The document contents are broken down into number of chunks to process based on BERT algorithm to pick text of significance ignoring grammatical words etc. this fall under NLP (Natural Language processing). Once the process is done, a text embedding model is used to process those chucks to convert it into vectors. Thus, converted vectors are stored as an index in a vector DB. There are different services in different clouds to offer this service like AWS kendra, Google Cloud Search. 
    </p>
    <br />
    <img src={`${process.env.PUBLIC_URL}/Blog_pics/rag/gcp.jpeg`} alt="none" />
    <img src={`${process.env.PUBLIC_URL}/Blog_pics/rag/kendra.jpeg`} style = {{marginLeft:'7vh'}}alt="none" />
    <br />
    <h5>Search the index:</h5>
    <br />
    <p>Once the embeddings are in place, you can always update with changing data. On the latest content, you can search for a query and get relevant responses based on the hierarchy of relevance. The logic of relevance is based on different vector Db services you are using. </p>
    <br />
    <h5>How do we send query to generate response:</h5>
    <br />
    <p>
    There are multiple steps involved in this process
    <br />
    1.	Storing our data as vectors
    <br />
    2.	Searching the query and using it as context
    <br />
    3.	Prompt engineering (to help LLM on how to respond)
    <br />
    4.	A framework to coordinate all these activities 
    <br />
    </p>
    <br />
    <img src={`${process.env.PUBLIC_URL}/Blog_pics/rag/rag_on_cloud.png`} alt="none" />
    <p>
    Based on the above steps, LLM can generate response. 
    As we have seen already on embeddings and searching the query for the context generation. All of them is placed in the prompt template for the LLM to understand on how, in what format and based on what data it must respond. This is given as an input to the LLM for it to respond. 
    Thus restricting the LLM not to generate a response from all that it knows but from the context we are setting and in the format (prompt) we are sending to respond. All these activities are coordinated by frameworks like Langchain.
    </p>
    <br />
    <h5>Video description of RAG model:</h5>
    <br />
    <a href="https://youtu.be/T-D1OfcDW1M?si=dtIkrihFetpu-UMQ " target='_blank'>link</a>
    <br />
    <br />
    <h5>Conclusion:</h5>
    <br />
    <p>
    RAG model will help LLM response generation more accurate, reasonable and within the context as desired by the user. 
    </p>
    </blockquote>
  </div>
</div>
  )
}
