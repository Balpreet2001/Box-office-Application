const ShowMainData = ({image , name , rating ,summary ,genres}) =>{
     let showimage = require('../../assets/show-not-found.png');
     return (
     <div>  
          <img src={image ? image.original : showimage} alt={name} />

          <div>
               <h1>{name}</h1>
               <div>{rating.average || 'N/A'}</div>
               <div dangerouslySetInnerHTML={ {__html:summary} } />

               <div>
                    Genres: 
                    <div>
                         {genres.map(genre => (
                              <span key={genre}> {genre}</span>
                         ))}
                    </div>
               </div>
          </div>
     </div>
     )
}

export default ShowMainData;