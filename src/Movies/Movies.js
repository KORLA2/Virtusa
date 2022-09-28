import React from 'react'
import styled from 'styled-components'
import {Card,CardContent,CardMedia,Typography,CardAction} from '@material-ui/core'
import { Link } from 'react-router-dom'
const Movies = ({setmovie}) => {
let database = [
  {
    Title: "Master",
    release: 2021,
    tracks: 5,
    songs: [
      { id: 1, name: "Vaathi Comming...", singer: "Anirudh", time: "5:30s" },
      { id: 2, name: "Antha  Kanna...", singer: "Yuvan", time: "4:30s" },
      { id: 3, name: "KuttiStory...", singer: "Vijay Anirudh", time: "5:30s" },
      { id: 4, name: "Beat of Master...", singer: "Anirudh", time: "5:30s" },
    ],
  },
  { Title: "Darbar", release: 2020, tracks: 5 },
  { Title: "96", release: 2009, tracks: 5 },
  { Title: "Hero", release: 2018, tracks: 5 },
];

  return (
    <Container>
      {database.map((e) => (
        <Card   component={Link}  to='/Tracks' style={{padding:'.5rem', textDecoration:'none',cursor:'pointer' 
        }}
   onClick={()=>{ console.log(e) ;setmovie(e)}}
        >
          {/* e.Title Img in Card Media */}
          <CardMedia />
          <CardContent>
            <Typography variant="h5"> {e.Title} </Typography>

            <Typography variant="body">{e.release} </Typography>
            <Typography variant="body2">{e.tracks} </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Movies
let Container=styled.div`
border:2px solid red;
padding:3rem;
display:flex;
justify-content: space-between;
align-items:center;
`