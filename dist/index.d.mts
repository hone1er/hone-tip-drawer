import * as react_jsx_runtime from 'react/jsx-runtime';
import { Config } from 'wagmi';
import { Chain } from 'viem';
import { SendTransactionMutate, WriteContractMutateAsync, SwitchChainMutate } from 'wagmi/query';

declare function TipDrawer({ className, chainId, sendTransaction, writeContractAsync, chains, switchChain, }: {
    className?: string;
    chainId: number;
    sendTransaction: SendTransactionMutate<Config, unknown>;
    writeContractAsync: WriteContractMutateAsync<Config, unknown>;
    chains: readonly [Chain, ...Chain[]];
    switchChain: SwitchChainMutate<Config, unknown>;
}): react_jsx_runtime.JSX.Element;

export { TipDrawer };
