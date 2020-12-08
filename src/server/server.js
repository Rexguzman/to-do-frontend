import express from 'express';
import config from './config';
import webpack from 'webpack';
import helmet from 'helmet';

import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serverRoutes from '../frontend/routes/serverRoutes';

import initialState from '../frontend/initialState';
import reducer from '../frontend/reducers';
import Layout from '../frontend/layout/Layout';

import getManifest from './getManifest';

const { env, port } = config;
const app = express();

if (env == 'development') {
    console.log('Development config');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const { publicPath } = webpackConfig.output;
    const serverConfig = { serverSideRender: true, publicPath };

    app.use(webpackDevMiddleware(compiler, serverConfig));
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use((req, res, next) => {
        if (!req.hashManifest) req.hashManifest = getManifest();
        next();
    });
    app.use(express.static(`${__dirname}/public`));
    app.use(helmet());
    app.use(helmet.permittedCrossDomainPolicies());
    app.disable('x-powered-by');
}

const setResponse = (html, sheet, preloadedState, manifest) => {

    
    const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
    const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

    return `<!DOCTYPE html>
            <html>
                <head>
                    <title>to-do-app</title>
                    
                    <style data-styled="active" data-styled-version="5.2.1">${sheet}</style>
                </head>
                <body>
                    <div id="app">${html}</div>
                    <div id="modal"></div>
                    <script>
                        window.__PRELOADED_STATE__ = ${JSON.stringify(
                            preloadedState
                        ).replace(/</g, '\\u003c')}
                    </script>
                    <script src="assets/app.js" type="text/javascript"></script>
                    <script src="${mainBuild}" type="text/javascript"></script>
                    <! --<script src="${vendorBuild}" type="text/javascript"></script> -->
                </body>
            </html>
        `;
};

const renderApp = (req, res) => {
    const store = createStore(reducer, initialState);
    const preloadedState = store.getState();

    const sheet = new ServerStyleSheet();

    const html = renderToString(
        <Provider store={store}>
            <StyleSheetManager sheet={sheet.instance}>
                <Layout>
                    <StaticRouter location={req.url} contex={{}}>
                        {renderRoutes(serverRoutes)}
                    </StaticRouter>
                </Layout>
            </StyleSheetManager>
        </Provider>
    );
    const styleTags = sheet.getStyleElement();
    sheet.seal();

    res.send(setResponse(html, sheet.instance, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(port, (err) => {
    if (err) console.log(err);
    else
        console.log(`Server running on port ${port} http://localhost:${port}/`);
});
