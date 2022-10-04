import { readFile, readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
    const bundleModuleAddress = '0xCC13755C2a4086a70950D04EDfA6A208eD71969d';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0xEA60489DEbC4aD9E8a060198b301aDC06e4d89Be';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Getting all NFTs from bundle...');
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle:');
    console.log(nftsInBundle);

    console.log('Creating a pack containing all the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'Bling Bling Dogs Pack!',
            image: readFileSync('./assets/blingdogs.jpg'),
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}