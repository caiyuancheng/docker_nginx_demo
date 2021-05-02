/*
 * @Descripttion: 
 * @Author: 蔡远程
 * @Date: 2021-05-02 16:56:59
 * @LastEditTime: 2021-05-02 17:03:24
 * @LastEditors: 蔡远程
 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:2001/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    'api': '',
                },
            },
        },
    },
}