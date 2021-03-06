'use strict';

var Provider = require('./provider.js');

var EtherscanProvider = require('./etherscan-provider.js');
var FallbackProvider = require('./fallback-provider.js');
var InfuraProvider = require('./infura-provider.js');
var JsonRpcProvider = require('./json-rpc-provider.js');

function getDefaultProvider(network) {
    return new FallbackProvider([
        new InfuraProvider(network),
        new EtherscanProvider(network),
    ]);
}

module.exports = {
    EtherscanProvider: EtherscanProvider,
    FallbackProvider: FallbackProvider,
    InfuraProvider: InfuraProvider,
    JsonRpcProvider: JsonRpcProvider,

    isProvider: Provider.isProvider,

    networks: Provider.networks,

    getDefaultProvider:getDefaultProvider,

    Provider: Provider,
}

require('ethers-utils/standalone.js')({
    providers: module.exports
});

