import React,{useEffect, useState} from "react";
import "./Card.scss";
const Second = () => {
   const api = "https://newsapi.org/v2/everything?q=tesla&from=2023-12-04&sortBy=publishedAt&apiKey=138adc448d5a431e9ccc5eddcd51c15f";

  const [Data, setData] = useState([])

   useEffect(()=>{
     fetch(api)
     .then(response => response.json())
     .then(data => setData(data.articles))
     .catch(err => console.log(err))
   }, [])

   console.log(Data)
   const [num,setNUm] =useState(10)

   const handlenum =() =>{
    if(num > Data.length){
      setNUm(Data.length)
    }
   }

  return (
    <>
      <div className="first_wrapper bodd">
        <span id="span">
        {Data.slice(0,num).map(({description,title,url,urlToImage,author})=>(
        <div class="card">
          <div class="img_box">
            <img
              src={urlToImage ? urlToImage : 'https://i.pinimg.com/736x/50/29/f5/5029f54d65a8fd5b75a71cb3347fc4d9.jpg'}
              alt={author}
            />
          </div>
          <div class="textarea">
            <span>
              <h1>{title.slice(0,30)}</h1>
              <p>{description && description.slice(0,90)}...
              </p>
            </span>
           <a href={url} target="_blank"> <button>Read more</button></a>
          </div>
        </div>
        ))}
        </span>
        <button onClick={()=>{setNUm(el=>el+10); handlenum}}> Add more </button>
      </div>
    </>
  );
};

export default Second;
