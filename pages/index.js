// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Chatw from "../components/chatW.js";
import InsertS from "../styles/style.js";
import { makeStyles } from '@material-ui/core/styles';
import io from 'socket.io-client';

const forBar =  {
    height: "100%",
    width: "20%",
    maxWidth : "200px",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#DDD",

}


const forWindow = {
  height: "100%",
  width: "80%",
  position: "absolute",
  right: 0,
  top: 0,
  borderLeft: "solid 4px #000",
  padding: 0,
  margin: 0
}

export default function Blog() {
  //通信するためのSocket
  const socket = io();
  console.log("<<< page loaded >>>");

  //初期メッセージ
    socket.on("now", data => {
        console.log(data.message);

    });

  return (
<>
    <InsertS />
    <div style={forBar}>
        <Cbar />
    </div>
    <div style={forWindow}>
        <Chatw />
    </div>
</>
  )

}
