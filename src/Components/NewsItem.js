import React from 'react'

const NewsItem =(props)=> {

    let {title,discription,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div>
        
        <div className="card" style={{marginTop:"30px",width: "21rem"}}>
             <span style={{marginLeft:"-50px"}}class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
             <img  src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-3-770x433.jpg"} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">{title}....</h5>
                <p className="card-text">{discription}...</p>
                <p style={{marginTop:"2px",color:"gray"}}><small>By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl}  className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }


export default NewsItem