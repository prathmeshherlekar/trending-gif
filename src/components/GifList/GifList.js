import React from 'react'
import GIFCard from '../GIFCard/GIFCard'
import { fetchFromAPI } from "../../fetch";
import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'

export default function GifList() {
    const [data, setData] = useState({ data: [{ images: { fixed_height: {} } }] })
    const url = "https://api.giphy.com/v1/gifs/trending?api_key=PVu7LpNi9KRSAc2V4tCBpOEWxe9ouQ0A"

    useEffect(() => {
        fetchFromAPI(url, setData)
    }, [])
    return (
        <div>
            <Grid container spacing={3}>

                {data.data.map((gif) => {
                    return <GIFCard gif={gif} key={gif.id} />
                })
                }


            </Grid>

        </div>
    )
}
