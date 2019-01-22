const {override} = require('customize-cra');

const cspConfigPolicy = {
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'unsafe-inline'", "'self'"],
    'style-src': ["'unsafe-inline'", "'self'"]
};

function addCspHtmlWebpackPlugin(config) {
    const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

    config.plugins.push(new cspHtmlWebpackPlugin(cspConfigPolicy));

    return config;
}

module.exports = {
    webpack: override(addCspHtmlWebpackPlugin),
};
