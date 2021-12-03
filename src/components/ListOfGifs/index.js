import React from 'react'
import Gif from '../Gif'
import './style.css'

export default function ListOfGifs({ gifs }) {
    return (
        <div className="ListOfGifs">
            {gifs.map(gif =>
                <Gif
                    key={gif.id}
                    {...gif}
                />
            )}
        </div>
    )
}
