import React,{useEffect, useState} from "react";
import "./Card.scss";
import './sec.scss'
const Second = () => {
  const [page, setPage] = useState(1)
  
  
  const api = `https://newsapi.org/v2/everything?q=tesla&from=2023-12-09&sortBy=publishedAt&apiKey=138adc448d5a431e9ccc5eddcd51c15f&page=${page}`;

  const [Data, setData] = useState([])
  const [error, setError] = useState("")

   useEffect(()=>{
    if(api){      
      fetch(api)
      .then(response => response.json())
      .then(data => setData(data.articles))
      .catch(err => setError(err))
    }
   }, [api])

   const [query, setQuery] = useState("")
   const handleInputchange = event =>{
    setQuery(event.target.value)
  }
  
  const filteritems = Data.filter(Data =>{Data.title &&  Data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1});

  function FilterData(Data,query){
    let filtered = Data;

    if(query){
      filtered = filteritems;
    }
     return  filtered.map(({description,title,url,urlToImage,author},index)=>(
       <div className="card">
           <div className="img_box">
             <img
               src={urlToImage ? urlToImage : 'https://i.pinimg.com/736x/50/29/f5/5029f54d65a8fd5b75a71cb3347fc4d9.jpg'}
               alt={author}
             />
          </div>
           <div className="textarea">
             <span>
               <h1>{title && title.slice(0,30)}...</h1>
               <p>{description && description.slice(0,90)}...
               </p>
             </span>
            <a href={url} target="_blank"> <button>Read more</button></a>
           </div>
         </div>
     ))
  }

  const result = FilterData(Data,query)
  
  return (
    <>
      <div className="first_wrapper bodd">
      <div className="group">
    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
    <input placeholder="Search" onChange={ handleInputchange} value={query} type="search" className="input"/>
</div>
        <span id="span">
    <button onClick={()=>{setPage(el=>el+1); handlenum}}> Add more </button>
    {result}
        </span>
        <p>{error && error}</p>
      </div>
    </>
  );
};

export default Second;
