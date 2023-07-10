import fakeJson from '../../../assets/json/fakeJson.json'

export const SeeAlbum = ({albumId, closeArr}) => {
  const fake = []
  return (
    <>{
        closeArr
        ? fakeJson.map(album => (
            album.albumId === albumId
              ? <div 
                  key={album.id}
                  >
                  <a 
                    target='blank'
                    href={album.url}
                    >
                    <img 
                      className="photo"
                      id={album.id}
                      src={album.thumbnailUrl}
                      alt={album.title}
                      title={album.title}
                    />
                  </a>
                </div>
              :null
          ))
        : null
        //console.log(closeArr, albumId)
        
      } 
    </>
  )
}
