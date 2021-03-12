module.exports = {
    publicPath: './',
    devServer: {
        open: true, // 自动打开浏览器
        port: 8000, // 设置端口
        hot: true, // 启用热更新
    },
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'ServerStatus'
        }
    },
    configureWebpack: {
        externals: {
            "axios": "axios",
        }
    }
};
