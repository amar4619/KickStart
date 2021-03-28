//A deployed factory of instANCE EXISTS
import web3 from './web3'
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xC2aAb7D597e63641ECd30031f558e8b1cdD706bC'
);
export default instance;