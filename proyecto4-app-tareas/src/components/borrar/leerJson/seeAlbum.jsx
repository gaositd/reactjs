import { useState, useEffect } from 'react'

export const SeeAlbum = ({albumId, albumJsonIDArray}) => {

  return (
    <div>
      {
        console.log(`idalbum = ${albumJsonIDArray}`)
      }
      {
        albumJsonIDArray && albumJsonIDArray.map(album =>{
          album.albumId === albumId
            ? <article>
                <figcaption>{album.title}</figcaption>
                  <div>
                    <a href='`${album.url}`' target='_blanK'>{album.url}</a>
                  </div>
                <figure>
                  <img 
                    src={album.thumbnailUrl}
                  />
                </figure>
              </article>
            : null
        })
      }
    </div>
  )
}
