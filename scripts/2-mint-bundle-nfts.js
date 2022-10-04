import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main () {
    // Paste in the address from when you created the bundle collection module
    const bundleModuleAddress = '0xCC13755C2a4086a70950D04EDfA6A208eD71969d';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch...');

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Cute Puppy',
                description: 'A pretty cute puppy!',
                image: readFileSync('./assets/puppy.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'A French Bulldog',
                description: 'A gangsta french bulldog!',
                image: readFileSync('./assets/bulldog.jpg'),
                properties: {
                    rarity: 'super rare!',
                    fanciness: 7,
                }
            },
            supply: 10,
        },
        {
            metadata: {
                name: 'A Pitbull',
                description: 'A cool ass pitbull',
                image: readFileSync('./assets/pitbull.jpg'),
                properties: {
                    rarity: 'super rare',
                    fanciness: 15,
                }
            },
            supply: 5,
        }
    ]);

    console.log('NFTs created!');
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}