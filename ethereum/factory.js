//A deployed factory of instANCE EXISTS
import web3 from './web3'
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x4165022E959b4B80648c9E9770aBEed777F0E7AB'
);
export default instance;