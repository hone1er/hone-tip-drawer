// src/components/Tip.tsx
import { useState } from "react";
import {
  useChainId,
  useSendTransaction,
  useSwitchChain,
  useWriteContract
} from "wagmi";

// src/components/ui/drawer.tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/drawer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(
  DrawerPrimitive.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DrawerPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    DrawerPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  }
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DrawerPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DrawerPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// src/components/Tip.tsx
import { erc20Abi, parseEther } from "viem";

// src/components/ui/input.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/Tip.tsx
import PolygonLogo from "public/logos/polygon_logo";
import OptimismLogo from "public/logos/optimism_logo";
import BaseLogo from "public/logos/base_logo";
import EthereumLogo from "public/logos/ethereum_logo";

// src/components/ui/select.tsx
import * as React3 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs2(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx3(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx3(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx3(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx3(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React3.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx3(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs2(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx3(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx3(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx3(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs2(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx3("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx3(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx3(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx3(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/button.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React4.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx4(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Tip.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var currencyMap = {
  1: [
    {
      name: "Wrapped Ethereum",
      symbol: "WETH",
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
    }
  ],
  137: [
    {
      name: "Wrapped Ethereum",
      symbol: "WETH",
      address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
    },
    {
      name: "Dai Stablecoin",
      symbol: "DAI",
      address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
    },
    {
      name: "Wrapped Matic",
      symbol: "WMATIC",
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    }
  ]
};
function TipDrawer({ className }) {
  const [amount, setAmount] = useState("");
  const chainId = useChainId();
  const { sendTransaction } = useSendTransaction();
  const { writeContractAsync } = useWriteContract();
  const { chains, switchChain } = useSwitchChain();
  const [selectedCurrencyAddress, setSelectedCurrencyAddress] = useState("");
  const chainLogoMap = {
    137: /* @__PURE__ */ jsx5(PolygonLogo, {}),
    10: /* @__PURE__ */ jsx5(OptimismLogo, {}),
    8453: /* @__PURE__ */ jsx5(BaseLogo, {}),
    1: /* @__PURE__ */ jsx5(EthereumLogo, {})
  };
  const chainColorMap = {
    137: "violet-600",
    10: "red-600",
    8453: "blue-600",
    1: "gray-600"
  };
  const handleTransferERC20 = async (address) => {
    try {
      await writeContractAsync(
        {
          address,
          abi: erc20Abi,
          functionName: "transfer",
          args: [
            process.env.NEXT_PUBLIC_TIP_ADDRESS,
            parseEther(amount)
          ]
        },
        {
          onError: (error) => {
            alert(error.message);
          },
          onSuccess: (hash) => {
            alert(
              `Thanks for the tip! \u{1F680} 
          Transaction hash: ` + hash + `Check it out on Etherscan: https://etherscan.io/tx/` + hash
            );
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleSend = async () => {
    try {
      sendTransaction({
        to: process.env.NEXT_PUBLIC_TIP_ADDRESS,
        value: parseEther(amount)
      });
    } catch (error) {
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs3(Drawer, { children: [
    /* @__PURE__ */ jsx5(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs3(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: `flex items-center gap-2 ${className}`,
        children: [
          /* @__PURE__ */ jsx5(PointerIcon, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx5("span", { children: "Send Tip" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx5(DrawerContent, { children: /* @__PURE__ */ jsxs3("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs3(DrawerHeader, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx5(DrawerTitle, { children: "Send a tip!" }),
        /* @__PURE__ */ jsxs3(DrawerDescription, { children: [
          "Did this tool help you? Send a tip to show your appreciation!",
          " ",
          /* @__PURE__ */ jsx5("br", {}),
          /* @__PURE__ */ jsx5("br", {}),
          "This tool was created by",
          /* @__PURE__ */ jsxs3(
            "a",
            {
              href: "https://hey.xyz/u/hone1er",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-500",
              children: [
                " ",
                "@hone1er"
              ]
            }
          ),
          "! Follow on hey.xyz or any Lens app for more updates. \u{1F680}"
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { className: "flex max-w-sm flex-col gap-6 p-4", children: [
        /* @__PURE__ */ jsx5("h3", { className: "text-lg font-semibold", children: "Select Chain" }),
        /* @__PURE__ */ jsx5("div", { className: "flex flex-wrap gap-2", children: chains.map((chain) => /* @__PURE__ */ jsx5(
          Button,
          {
            onClick: () => switchChain({ chainId: chain.id }),
            size: "icon",
            className: `h-8 w-8 ${chainId === chain.id ? `border  bg-gray-200 shadow-md shadow-${chainColorMap[chain.id]}` : ""} `,
            variant: chainId === chain.id ? "outline" : "secondary",
            children: chainLogoMap[chain.id]
          },
          chain.id
        )) }),
        /* @__PURE__ */ jsxs3(
          Select,
          {
            onValueChange: (val) => setSelectedCurrencyAddress(val),
            children: [
              /* @__PURE__ */ jsx5(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx5(SelectValue, { placeholder: "Currency" }) }),
              /* @__PURE__ */ jsx5(SelectContent, { children: currencyMap[chainId]?.map((currency) => /* @__PURE__ */ jsxs3(SelectItem, { value: currency.address, children: [
                currency.name,
                " (",
                currency.symbol,
                ")"
              ] }, currency.address)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx5("div", { className: "p-4 pb-0", children: /* @__PURE__ */ jsx5("div", { className: "mt-3", children: /* @__PURE__ */ jsx5(
        Input,
        {
          placeholder: "Enter amount",
          value: amount,
          onChange: (e) => setAmount(e.target.value),
          type: "number",
          min: "0",
          step: "0.01"
        }
      ) }) }),
      /* @__PURE__ */ jsxs3(DrawerFooter, { children: [
        /* @__PURE__ */ jsx5(
          Button,
          {
            onClick: () => handleTransferERC20(selectedCurrencyAddress),
            children: "Send"
          }
        ),
        /* @__PURE__ */ jsx5(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx5(Button, { variant: "outline", children: "Cancel" }) })
      ] })
    ] }) })
  ] });
}
function PointerIcon({ ...props }) {
  return /* @__PURE__ */ jsxs3(
    "svg",
    {
      ...props,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx5("path", { d: "M22 14a8 8 0 0 1-8 8" }),
        /* @__PURE__ */ jsx5("path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }),
        /* @__PURE__ */ jsx5("path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" }),
        /* @__PURE__ */ jsx5("path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" }),
        /* @__PURE__ */ jsx5("path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
      ]
    }
  );
}
export {
  TipDrawer
};
