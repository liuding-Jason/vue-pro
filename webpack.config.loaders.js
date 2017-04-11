
module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue'
    },
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
        	name: '[name].[ext]?[hash]'
        }
    },
    {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=10000&name=[path][name]_[sha512:hash:base64:7].[ext]' 
    }
]