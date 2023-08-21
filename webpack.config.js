module.exports = {

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Inject styles into the DOM
                    'css-loader',   // Handle CSS imports
                    'sass-loader',  // Compile SCSS to CSS
                ],
            },
        ],
    },
};
