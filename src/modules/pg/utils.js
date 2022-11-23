import { PAY_TOKENS_WITH_PRICES } from '@/common/constants/pay-tokens.js';

export async function getWFTMToken() {
    const payTokens = await PAY_TOKENS_WITH_PRICES();

    return payTokens.find(token => token.address === process.env.VUE_APP_HARMONY_WRAPPED_ONE_CONTRACT_ADDRESS);
}
