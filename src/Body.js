     import   React,{useState} from 'react';
import  styles ,{keyframes}from 'styled-components';
import {styled } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/chip'
import {bounce,pulse, zoomIn} from 'react-animations'
import img from './angry-do.png'
import img1 from './dog2.png'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  
const icon = (...args)=>{
   
 return (
   <Paper sx={{ m: 1 }} elevation={4}>
     <Card style={{ height: "100px", width: "100px" , padding:'20px' }}>
       <Typography
         variant="body2"
         color="text.secondary"
         style={{ margin: "10px" }}
       >
         {args[0]}
       </Typography>{" "}
       <Typography
         variant="body2"
         color="text.secondary"
         style={{ margin: "10px" }}
       >
         {args[1]}
       </Typography>{" "}
       <Typography
         variant="body2"
         color="text.secondary"
         style={{ margin: "10px" }}
       >
         {args[2]}
       </Typography>
     </Card>
   </Paper>
 );
}

const Body = () => {
      const [expanded, setExpanded] = useState(false);
      const [expands, setExpands] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };  const handleExpandClicks = () => {
    setExpands(!expands);
  };
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Container>
      <First>
        <Bound>
          <Card style={{ width: "400px", padding: "10px", margin: "20px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="CanineMaster"
            />
            <CardMedia
              component="img"
              //   height="100"
              image={img}
              alt="Not found"
            />
            <CardContent style={{ display: "flex" }}>
              <CardActions>
                <Bounce>
                  <Button size="large" color="secondary">
                    Buy Now
                  </Button>
                </Bounce>
              </CardActions>{" "}
              <CardActions>
                <Pulse>
                  <Button size="large" color="secondary">
                    Chart
                  </Button>
                </Pulse>
              </CardActions>{" "}
              <CardActions>
                <Zooms>
                  <Button size="large" color="secondary">
                    Contract{" "}
                  </Button>
                </Zooms>
              </CardActions>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Flex>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ margin: "auto" }}
                  >
                    TOKENOMICS
                  </Typography>
                </Flex>

                <Div>
                  <Chip label="10% Team Lock" style={{ margin: "20px" }} />
                </Div>
                <Div>
                  <Chip label="20% Staking Rewards" />
                </Div>
                <Div>
                  <Chip label="30% Liquidity" style={{ margin: "20px" }} />
                </Div>
                <Div>
                  <Chip label="40% Fair Launch" />
                </Div>
              </CardContent>

              <Box sx={{ height: 180 }}>
                <FormControlLabel
                  control={<Switch checked={checked} onChange={handleChange} />}
                  label="TAX"
                />
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Zoom in={checked}>
                    {icon("3% TAX", "2% Reserve", "1% Burn")}
                  </Zoom>
                  <Zoom
                    in={checked}
                    style={{ transitionDelay: checked ? "500ms" : "0ms" }}
                  >
                    {icon("7% Sell Tax ", "6%Marketing", "1%Burn")}
                  </Zoom>
                </Box>
              </Box>
            </Collapse>
          </Card>
          <Zooms>

          <Typography
            variant="h5"
            color="text.secondary"
            style={{ margin: "auto", textAlign: "center" }}
          >
            THE KUPPY SYSTEM
          </Typography>
          </Zooms>
        </Bound>
      </First>

      <Second>
        <Bound>
          <Typography
            variant='body1'
            color="text.secondary"
            style={{ margin: "auto" }}
          >
            The Kuppy Clans Ecosystem consists of our two NAtive Tokens -Canine
            Master and Fenine Master
          </Typography>
          <Card
            style={{
              width: "400px",
              padding: "10px",
              margin: "20px",
              //   position: "absolute",
              //   right: "20px",
              //   bottom:'0px'
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  F
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="FenineMaster"
            />
            <CardMedia
              component="img"
              image={img1}
            />

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"></IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Bounce>
                <Back>Coming Soon</Back>
              </Bounce>
              <ExpandMore
                expand={expands}
                onClick={handleExpandClicks}
                aria-expanded={expands}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>

            <Collapse in={expands} timeout="auto" unmountOnExit>
              <Typography paragraph>
                This is a strict white list presale Allocations for the Kuppy
                Community to white list for this Pre-Sale,we encourage you to
                stkae 100,000 Canine Master $CM for 90days 10% of raised BUSDs
                would be used to BUY Back $ CM
              </Typography>
            </Collapse>
          </Card>
        </Bound>
      </Second>
    </Container>
  );
}

export default Body
let First = styles.div`
//   background: red;
  padding: 20px;
// clip-path: polygon(0 1%, 49% 0, 50% 100%, 0% 100%);

  overflow: visible;
  padding:30px;
margin:'100px';
`;
let Div = styles.div`


animation:2s ${keyframes`${pulse}`} infinite;



`;
let Second = styles.div`
//   background: pink;
//   position: relative;
// height:500px;
// clip-path: polygon(49% 0, 100% 0, 100% 100%, 50% 100%);
  padding: 50px;
`;
let Back = styles.div`
padding:10px;
background:radial-gradient(circle at 100%, #3f87a6, #ebf8e1, #f69d3c);
border-radiius:4px;
clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
`;
let Bounce=styles.div`
animation:2s ${keyframes  `${bounce}`} infinite;
`
let Pulse = styles.div`
animation:.5s ${keyframes`${pulse}`} infinite;
padding:20px;
`
let Zooms = styles.div`
animation:2s ${keyframes`${zoomIn}`} infinite;

`;
let Flex = styles.div`
display:flex;
justify-content:center;
padding:10px;
clip-path: polygon(50% 0%, 70% 24%, 98% 35%, 77% 68%, 79% 91%, 50% 70%, 21% 91%, 19% 62%, 2% 35%, 26% 25%);
background:radial-gradient(circle at 100%, #3f87a6, #ebf8e1, #f69d3c);
`;
let Bound = styles.div`
display:flex;
@media(max-width:800px){
display:flex;
flex-direction:column;

}
`;
let Container = styles.div`
display:flex;
flex-direction:column;
justify-content:center;
// @media(max-width:800px){
// display:flex;
// flex-direction:column;
// background:red;
// }
`;