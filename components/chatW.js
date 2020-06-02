import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography } from '@material-ui/core';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "80%",
    height: "70%"

}

//チャンネルのヘッダー
const chatHead = {
    fontSize: "32px",
    height: "10%",
}

//メッセージを放り込む部分
const chatWL = {
    width: "100%",
    height: "70%",
    position: "relative",
    border: "solid 3px red"

}

const useStyles = createStyles({
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
});


export default function chatWin() {
    //const classes = useStyles();
    return (
        <>
            <div style={chatHead}>
                <h6>これがチャンネルヘッダ</h6>
                <Typography variant="overline" style={{ color: "rgba(0, 0, 0, 0.6)" }}>これが説明</Typography>
            </div>
            <div style={chatWL}>
                <p>asdf</p>
            </div>
        </>
    )
}