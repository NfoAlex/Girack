// pages/index.js

import Cbar from '../components/Cbar';
import Chatw from "../components/chatWindow";
import InsertS from "../styles/style";
import useStyles from '../styles/useStyles';


const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    console.log("<<< page loaded >>>");
    const classes = useStyles();

    return (
        <>
            <InsertS />
            <div className={classes.bar}>
                <Cbar />
            </div>
            <div className={classes.window}>
                <Chatw />
            </div>
        </>
    );

}

export default Blog;
