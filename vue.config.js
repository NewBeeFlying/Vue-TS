const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: true,
        host: 'localhost',
        // 代理
        proxy: {
            '/api': {
                // 目标地址
                target: 'http://1.116.64.64:5004/api2',
                // 允许跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
})
