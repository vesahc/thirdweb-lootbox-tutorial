import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0x52c5a3829805cA6c8FaCB856C1464142162A0eaD'
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main(); 
}   catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}