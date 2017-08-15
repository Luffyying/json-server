module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: 'build.js'
    },
    module:{
		rules:[{
			test:/\.css$/,
            use:[{
                loader:'css-loader',
                options:{
                    minimize:true
                }
            }]
			//use:['style-loader','css-loader']
		},
		{
			test:/\.vue$/,
			use:["vue-loader"]
		 }
  //       {
  //           loader:'css-loader',
  //           options:{
  //               minimize:true
  //           }
  //       }
        ]
	},
	devServer: {
            // port:'8080',
            // host:'localhost',
            proxy: {
                '/user': {
                    target: 'http://localhost:9001',//代理服务器(此服务器地址为代理服务器地址，之所以为'localhost:9001',是因为json-server起的服务器地址就是这个)
                    changeOrigin: true,
                    secure: false
                }
            },
            //意思是将匹配'/index'格式的url自动重定向为'http://localhost:5000'
            inline: true
    }
}
//配置文件提供一个入口和一个出口，webpack根据这个来进行js的打包和编译工作，
//__dirname 是指你的项目根目录.
//任何对 webpack.config.js 文件的改变都需要重启服务器才会生效.
//webpack仅能识别javascript,so need some loaders
//在生产环境下，css会被打包到js文件中，style-loader则会将样式写在style标签中
//分离css文件，将配置文件中的style-loader 用 extract-text-webpack-plugin代替
/*example
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	module:{
		rules:[
			test:/\.css$/,
			loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
		]
	},
	plugins:[
		new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
	]
}




*/