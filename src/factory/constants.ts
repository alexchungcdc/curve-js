import {DictInterface} from "../interfaces";
import factorySwapABI from "../constants/abis/json/factoryPools/swap.json";
import MetaUSDABI from "../constants/abis/json/factory-v2/MetaUSD.json";
import MetaUSDBalancesABI from "../constants/abis/json/factory-v2/MetaUSDBalances.json";
import MetaBTCABI from "../constants/abis/json/factory-v2/MetaBTC.json";
import MetaBTCBalancesABI from "../constants/abis/json/factory-v2/MetaBTCBalances.json";
import MetaBTCRenABI from "../constants/abis/json/factory-v2/MetaBTCRen.json";
import MetaBTCRenBalancesABI from "../constants/abis/json/factory-v2/MetaBTCBalancesRen.json";
import Plain2BasicABI from "../constants/abis/json/factory-v2/Plain2Basic.json";
import Plain2BalancesABI from "../constants/abis/json/factory-v2/Plain2Balances.json";
import Plain2ETHABI from "../constants/abis/json/factory-v2/Plain2ETH.json";
import Plain2OptimizedABI from "../constants/abis/json/factory-v2/Plain2Optimized.json";
import Plain3BasicABI from "../constants/abis/json/factory-v2/Plain3Basic.json";
import Plain3BalancesABI from "../constants/abis/json/factory-v2/Plain3Balances.json";
import Plain3ETHABI from "../constants/abis/json/factory-v2/Plain3ETH.json";
import Plain3OptimizedABI from "../constants/abis/json/factory-v2/Plain3Optimized.json";
import Plain4BasicABI from "../constants/abis/json/factory-v2/Plain4Basic.json";
import Plain4BalancesABI from "../constants/abis/json/factory-v2/Plain4Balances.json";
import Plain4ETHABI from "../constants/abis/json/factory-v2/Plain4ETH.json";
import Plain4OptimizedABI from "../constants/abis/json/factory-v2/Plain4Optimized.json";


export const implementationABIDictEthereum: DictInterface<any> = {
    "0x5F890841f657d90E081bAbdB532A05996Af79Fe6": factorySwapABI,

    "0x213be373FDff327658139C7df330817DAD2d5bBE": MetaUSDABI,
    "0x55Aa9BF126bCABF0bDC17Fa9E39Ec9239e1ce7A9": MetaUSDBalancesABI,

    "0xC6A8466d128Fbfd34AdA64a9FFFce325D57C9a52": MetaBTCABI,
    "0xc4C78b08fA0c3d0a312605634461A88184Ecd630": MetaBTCBalancesABI,

    "0xECAaecd9d2193900b424774133B1f51ae0F29d9E": MetaBTCRenABI,
    "0x40fD58D44cFE63E8517c9Bb3ac98676838Ea56A8": MetaBTCRenBalancesABI,

    "0x6523Ac15EC152Cb70a334230F6c5d62C5Bd963f1": Plain2BasicABI,
    "0x24D937143d3F5cF04c72bA112735151A8CAE2262": Plain2BalancesABI,
    "0x6326DEbBAa15bCFE603d831e7D75f4fc10d9B43E": Plain2ETHABI,
    "0x4A4d7868390EF5CaC51cDA262888f34bD3025C3F": Plain2OptimizedABI,

    "0x9B52F13DF69D79Ec5aAB6D1aCe3157d29B409cC3": Plain3BasicABI,
    "0x50b085f2e5958C4A87baf93A8AB79F6bec068494": Plain3BalancesABI,
    "0x8c1aB78601c259E1B43F19816923609dC7d7de9B": Plain3ETHABI,
    "0xE5F4b89E0A16578B3e0e7581327BDb4C712E44De": Plain3OptimizedABI,

    "0x5Bd47eA4494e0F8DE6e3Ca10F1c05F55b72466B8": Plain4BasicABI,
    "0xd35B58386705CE75CE6d09842E38E9BE9CDe5bF6": Plain4BalancesABI,
    "0x88855cdF2b0A8413D470B86952E726684de915be": Plain4ETHABI,
    "0xaD4753D045D3Aed5C1a6606dFb6a7D7AD67C1Ad7": Plain4OptimizedABI,
}

export const implementationABIDictPolygon: DictInterface<any> = {
    "0x4fb93D7d320E8A263F22f62C2059dFC2A8bCbC4c": MetaUSDABI,
    "0x39fE1824f98CD828050D7c51dA443E84121c7cf1": MetaUSDBalancesABI,

    "0xC05EB760A135d3D0c839f1141423002681157a17": MetaBTCRenABI,
    "0xD8336532f6ED7b94282fAF724fe41d6145E07Cfc": MetaBTCRenBalancesABI,

    "0x571FF5b7b346F706aa48d696a9a4a288e9Bb4091": Plain2BasicABI,
    "0x8925D9d9B4569D737a48499DeF3f67BaA5a144b9": Plain2BalancesABI,
    "0xAe00f57663F4C85FC948B13963cd4627dAF01061": Plain2ETHABI,
    "0x8101E6760130be2C8Ace79643AB73500571b7162": Plain2OptimizedABI,

    "0x493084cA44C779Af27a416ac1F71e3823BF21b53": Plain3BasicABI,
    "0x9B4Ed6F8904E976146b3dC0233CD48Cf81835240": Plain3BalancesABI,
    "0xA9134FaE98F92217f457918505375Ae91fdc5e3c": Plain3ETHABI,
    "0xCC9fd96C26c450Dd4580893afF75efd5cb6C12Fc": Plain3OptimizedABI,

    "0x991b05d5316fa3A2C053F84658b84987cd5c9970": Plain4BasicABI,
    "0xC7c46488566b9ef9B981b87E328939CaA5ca152f": Plain4BalancesABI,
    "0xf31bcdf0B9a5eCD7AB463eB905551fBc32e51856": Plain4ETHABI,
    "0xAc273d5b4FC06625d8b1abA3BE8De15bDFb8E39f": Plain4OptimizedABI,
}

export const implementationBasePoolAddressDictEthereum: DictInterface<any> = {
    "0x5F890841f657d90E081bAbdB532A05996Af79Fe6": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7", // 3pool

    "0x213be373FDff327658139C7df330817DAD2d5bBE": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7", // 3pool
    "0x55Aa9BF126bCABF0bDC17Fa9E39Ec9239e1ce7A9": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7", // 3pool

    "0xC6A8466d128Fbfd34AdA64a9FFFce325D57C9a52": "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714", // sbtc
    "0xc4C78b08fA0c3d0a312605634461A88184Ecd630": "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714", // sbtc

    "0xECAaecd9d2193900b424774133B1f51ae0F29d9E": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B", // ren
    "0x40fD58D44cFE63E8517c9Bb3ac98676838Ea56A8": "0x93054188d876f558f4a66B2EF1d97d16eDf0895B", // ren
}

export const implementationBasePoolAddressDictPolygon: DictInterface<any> = {
    "0x4fb93D7d320E8A263F22f62C2059dFC2A8bCbC4c": "0x445FE580eF8d70FF569aB36e80c647af338db351", // aave
    "0x39fE1824f98CD828050D7c51dA443E84121c7cf1": "0x445FE580eF8d70FF569aB36e80c647af338db351", // aave

    "0xC05EB760A135d3D0c839f1141423002681157a17": "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67", // ren
    "0xD8336532f6ED7b94282fAF724fe41d6145E07Cfc": "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67", // ren
}

export const basePoolAddressNameDictEthereum: DictInterface<string> = {
    "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7": "3pool",
    "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714": "sbtc",
    "0x93054188d876f558f4a66B2EF1d97d16eDf0895B": "ren",
}

export const basePoolAddressNameDictPolygon: DictInterface<string> = {
    "0x445FE580eF8d70FF569aB36e80c647af338db351": "aave",
    "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67": "ren",
}

export const basePoolAddressCoinsDictEthereum: DictInterface<string[]> = {
    "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7": ['DAI', 'USDC', 'USDT'],     // 3pool
    "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714": ['renBTC', 'WBTC', 'sBTC'],  // sbtc
    "0x93054188d876f558f4a66B2EF1d97d16eDf0895B": ['renBTC', 'WBTC'],          // ren
}

export const basePoolAddressCoinsDictPolygon: DictInterface<string[]> = {
    "0x445FE580eF8d70FF569aB36e80c647af338db351": ['DAI', 'USDC', 'USDT'],     // aave
    "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67": ['WBTC', 'renBTC'],          // ren
}

export const basePoolAddressCoinAddressesDictEthereum: DictInterface<string[]> = {
    "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7": [  // 3pool
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    ].map((addr) => addr.toLowerCase()),

    "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714": [  // sbtc
        '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
    ].map((addr) => addr.toLowerCase()),

    "0x93054188d876f558f4a66B2EF1d97d16eDf0895B": [  // ren
        '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    ].map((addr) => addr.toLowerCase()),
}

export const basePoolAddressCoinAddressesDictPolygon: DictInterface<string[]> = {
    "0x445FE580eF8d70FF569aB36e80c647af338db351": [  // aave
        '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    ].map((addr) => addr.toLowerCase()),

    "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67": [  // ren
        '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
    ].map((addr) => addr.toLowerCase()),
}

export const basePoolAddressDecimalsDictEthereum: DictInterface<number[]> = {
    "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7": [18, 6, 6],  // 3pool
    "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714": [8, 8, 18],  // sbtc
    "0x93054188d876f558f4a66B2EF1d97d16eDf0895B": [8, 8],      // ren
}

export const basePoolAddressDecimalsDictPolygon: DictInterface<number[]> = {
    "0x445FE580eF8d70FF569aB36e80c647af338db351": [18, 6, 6],     // aave
    "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67": [8, 8],         // ren
}

export const basePoolAddressZapDictEthereum: DictInterface<string> = {
    "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7": "0xA79828DF1850E8a3A3064576f380D90aECDD3359".toLowerCase(),  // 3pool
    "0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714": "0x7abdbaf29929e7f8621b757d2a7c04d78d633834".toLowerCase(),  // sbtc
    "0x93054188d876f558f4a66B2EF1d97d16eDf0895B": "0x7abdbaf29929e7f8621b757d2a7c04d78d633834".toLowerCase(),  // ren TODO CHECK!!!
}

export const basePoolAddressZapDictPolygon: DictInterface<string> = {
    "0x445FE580eF8d70FF569aB36e80c647af338db351": "0x5ab5C56B9db92Ba45a0B46a207286cD83C15C939".toLowerCase(),     // aave
    "0xC2d95EEF97Ec6C17551d45e77B590dc1F9117C67": "0xE2e6DC1708337A6e59f227921db08F21e3394723".toLowerCase(),     // ren
}

export const blackListPolygon: string[] = [
    "0x666dc3b4babfd063faf965bd020024af0dc51b64",
    "0xe4199bc5c5c1f63dba47b56b6db7144c51cf0bf8",
    "0x88c4d6534165510b2e2caf0a130d4f70aa4b6d71",
];