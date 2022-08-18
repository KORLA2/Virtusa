import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Home from '@material-ui/icons/HomeRounded'
import Chat from '@material-ui/icons/Telegram'
import Audit from "@material-ui/icons/Audiotrack"
import Menu from '@material-ui/icons/Menu'
import Close  from '@material-ui/icons/Close'
import Paper from '@material-ui/icons/Pages'
import Con from '@material-ui/icons/CastConnectedOutlined'
const Header = () => {
  let [screen,setscreen]=useState(0);
  let [bar,setbar]=useState(0);
useEffect(() => {

window.addEventListener('resize',()=>{

setscreen(window.innerWidth);
})

}, [screen])



  return (
    <Head>
      <div>Matrix Labs</div>
      {screen > 800 && (
        <div>
          <div>
            <Home />
            Home
          </div>
          <div>About</div>
          <div>
            <Paper />
            WhitePaper
          </div>

          <div>
            <Audit />
            Audit
          </div>
          <div>
            <Chat />
            Telegram
          </div>
          <div>
            <Con />
            Connect
          </div>
        </div>
      )}

      {screen < 800 && (
        <div>
          <Menu
            onClick={() => {
              setbar(1);
            }}
            style={{ cursor: "pointer" }}
          />

          {bar ? (
            <SideBar>
              <Close
                onClick={() => {
                  setbar(0);
                }}
                style={{ position: "absolute", right: "10px", cursor:'pointer', }}
              />
              <Column>
                <div>
                  <Home />
                  Home
                </div>
                <div>
                  <Chat />
                  Chat
                </div>
                <div>
                  <Audit />
                  Audit
                </div>{" "}
                <div>
                  <Paper />
                  WhitePaper
                </div>{" "}
                <div>
                  <Con/>
                 Connect
                </div>
              </Column>
            </SideBar>
          ) : (
            ""
          )}
        </div>
      )}
    </Head>
  );
}

export default Header
let Head = styled.div`
  height: 60px;

  padding: 10px;
  min-width: 100vw;
  background: radial-gradient(circle at 100%, #3f87a6, #bef8e1, #f69d3c);
  display: flex;
  justify-content: space-around;

  align-items: center;
  div {
    display: flex;
    margin: 10px;
  }
`;
let SideBar = styled.div`
  /* height:500px; */
  padding: 20px;
  background: red;
  position: absolute;
  top: 30px;
  right: 10%;
  z-index: 11;
  border-radius:10px;
 background: radial-gradient(
    circle at 100%,
    #3f87a6,
    #ebf8e1,
    #f69d3c
  );
`;
let Column=styled.div`

display:flex;
flex-direction: column;
div{
text-decoration: underline;
cursor:pointer;
margin:20px;
}
`