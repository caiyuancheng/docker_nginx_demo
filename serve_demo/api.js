/*
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2021-05-02 15:31:41
 * @LastEditTime: 2021-05-02 15:46:40
 * @LastEditors: 蔡远程
 */
const express = require('express');

const PORT = 2001;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/json', (req, res) => {
    res.json({
        code: 0,
        data: req.query.msg
    })
});

app.listen(PORT, HOST);