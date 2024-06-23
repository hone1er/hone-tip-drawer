import React, { useState } from 'react';
import {
  useChainId,
  useSendTransaction,
  useSwitchChain,
  useWriteContract,
} from 'wagmi';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';
import { erc20Abi, parseEther } from 'viem';
import { Input } from './ui/input';
import PolygonLogo from '../../public/logos/polygon_logo';
import OptimismLogo from '../../public/logos/optimism_logo';
import BaseLogo from '../../public/logos/base_logo';
import EthereumLogo from '../../public/logos/ethereum_logo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Currency } from '../Currency';

const currencyMap: Record<number, Currency[]> = {
  1: [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      address: '0x',
    },
    {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    {
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
      name: 'Polygon',
      symbol: 'MATIC',
      address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
    },
  ],
  137: [
    {
      name: 'Wrapped Ethereum',
      symbol: 'WETH',
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    },

    {
      name: 'Wrapped Matic',
      symbol: 'MATIC',
      address: '0x',
    },
  ],
};
export function TipDrawer({
  className,
  tipJarAddress,
}: {
  className?: string;
  tipJarAddress: `0x${string}`;
}) {
  const [amount, setAmount] = useState('');
  const chainId = useChainId();

  const { sendTransaction } = useSendTransaction();
  const { writeContractAsync } = useWriteContract();
  const { chains, switchChain } = useSwitchChain();
  const [selectedCurrencyAddress, setSelectedCurrencyAddress] = useState('');
  const chainLogoMap: Record<number | string, JSX.Element> = {
    137: <PolygonLogo />,
    10: <OptimismLogo />,
    8453: <BaseLogo />,
    1: <EthereumLogo />,
  };

  const chainColorMap: Record<number, string> = {
    137: 'violet-600',
    10: 'red-600',
    8453: 'blue-600',
    1: 'gray-600',
  };

  const handleTransferERC20 = async (address: `0x${string}`) => {
    try {
      await writeContractAsync(
        {
          address: address,
          abi: erc20Abi,
          functionName: 'transfer',
          args: [tipJarAddress, parseEther(amount)],
        },
        {
          onError: (error) => {
            alert(error.message);
          },
          onSuccess: (hash: string) => {
            alert(
              `Thanks for the tip! 🚀 
          Transaction hash: ` +
                hash +
                `Check it out on Etherscan: https://etherscan.io/tx/` +
                hash
            );
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleSend = async () => {
    try {
      sendTransaction({
        to: tipJarAddress,

        value: parseEther(amount),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size={'sm'}
          variant={'outline'}
          className={`flex items-center gap-2 ${className}`}
        >
          <PointerIcon className='h-5 w-5' />
          <span>Send Tip</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader className='space-y-4'>
            <DrawerTitle>Send a tip!</DrawerTitle>
            <DrawerDescription>
              Did this tool help you? Send a tip to show your appreciation!{' '}
              <br />
              <br />
              This tool was created by
              <a
                href='https://hey.xyz/u/hone1er'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500'
              >
                {' '}
                @hone1er
              </a>
              ! Follow on hey.xyz or any Lens app for more updates. 🚀
            </DrawerDescription>
          </DrawerHeader>
          <div className='flex max-w-sm flex-col gap-6 p-4'>
            <h3 className='text-lg font-semibold'>Select Chain</h3>
            <div className='flex flex-wrap gap-2'>
              {chains.map((chain) => (
                <Button
                  key={chain.id}
                  onClick={() => switchChain({ chainId: chain.id })}
                  size='icon'
                  className={`h-8 w-8 ${
                    chainId === chain.id
                      ? `border  bg-gray-200 shadow-md shadow-${
                          chainColorMap[chain.id]
                        }`
                      : ''
                  } `}
                  variant={chainId === chain.id ? 'outline' : 'secondary'}
                >
                  {chainLogoMap[chain.id]}
                </Button>
              ))}
            </div>
            <Select
              onValueChange={(val: string) => setSelectedCurrencyAddress(val)}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Currency' />
              </SelectTrigger>
              <SelectContent>
                {currencyMap[chainId]?.map((currency: Currency) => (
                  <SelectItem key={currency.address} value={currency.address}>
                    {currency.name} ({currency.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='p-4 pb-0'>
            <div className='mt-3'>
              <Input
                placeholder={'Enter amount'}
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAmount(e.target.value)
                }
                type='number'
                min='0'
                step='0.01'
              />
            </div>
          </div>
          <DrawerFooter>
            <Button
              onClick={() => {
                if (selectedCurrencyAddress === '0x') {
                  handleSend();
                  return;
                }
                handleTransferERC20(selectedCurrencyAddress as `0x${string}`);
              }}
            >
              Send
            </Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function PointerIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 14a8 8 0 0 1-8 8' />
      <path d='M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0' />
      <path d='M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1' />
      <path d='M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10' />
      <path d='M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15' />
    </svg>
  );
}
