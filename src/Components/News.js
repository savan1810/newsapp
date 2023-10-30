import React, {useState,useEffect}  from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import Search from './Search'
// import InfiniteScroll from 'react-infinite-scroll-component';
// We can also add infinite scroll instead of using prev and next

const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults,setTotalResults]=useState(0)
    const capitalize=(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title=`${capitalize(props.category)}-DailyNews`
    const updateNews=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6f5bd3f5e0ea4b68b68d5e84ff5e9e18&page=${page}&pageSize=${props.pageSize}&q=${props.q}`
      let data=await fetch(url)
      setLoading(true)
      let parseData=await data.json()
      console.log(parseData.articles)
      setArticles(parseData.articles)
      setLoading(false)
      setTotalResults(parseData.totalResults)
    }

    

    const handlePrev=async ()=>{
      setPage(page-1)
      updateNews();
    }

    const handleNext=async ()=>{
      setPage(page+1)
      updateNews();
    }

    useEffect(() => {
      updateNews();
    })
      
    
    
      return (
        <>
        
        <div style={{position:"relative",top:"80px"}}>
            <h1 className='container  text-center 'style={{marginBottom:"20px",marginTop:"20px"}} >DailyNews - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner/>}
            <div className='container ' style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",marginTop:"10px"}}>
              {!loading && articles.map((element)=>{
                  return <div key={element.url}  >
                          
                          <NewsItem title={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })} 
            </div>
            <div className='container ' style={{marginTop:"15px"}}>
                <button disabled={page<=1} style={{marginRight:"1100px"}}type="button" class="btn btn-dark" onClick={handlePrev}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" class="btn btn-dark" onClick={handleNext}>Next &rarr; </button>
            </div> 
      </div>
      {/* <p>hello {props.q}</p> */}
    </>  
    )
  }



News.defaultProps={
  country:"in",
  pageSize:10,
  category:"general",
  q:""
  
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
  q:PropTypes.string
}

export default News