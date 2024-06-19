// src/components/Tip.tsx
import { useState } from "react";

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

// public/logos/polygon_logo.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function PolygonLogo() {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      width: "360",
      height: "360",
      viewBox: "0 0 360 360",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx3("rect", { width: "360", height: "360", rx: "180", fill: "#6C00F6" }),
        /* @__PURE__ */ jsx3(
          "path",
          {
            d: "M218.804 99.5819L168.572 128.432V218.473L140.856 234.539L112.97 218.46V186.313L140.856 170.39L158.786 180.788V154.779L140.699 144.511L90.4795 173.687V231.399L140.869 260.418L191.088 231.399V141.371L218.974 125.291L246.846 141.371V173.374L218.974 189.597L200.887 179.107V204.986L218.804 215.319L269.519 186.47V128.432L218.804 99.5819Z",
            fill: "white"
          }
        )
      ]
    }
  );
}

// public/logos/optimism_logo.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function OptimismLogo() {
  return /* @__PURE__ */ jsxs3(
    "svg",
    {
      width: "500",
      height: "500",
      viewBox: "0 0 500 500",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx4("circle", { cx: "250", cy: "250", r: "250", fill: "#FF0420" }),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",
            fill: "white"
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",
            fill: "white"
          }
        )
      ]
    }
  );
}

// public/logos/base_logo.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function BaseLogo() {
  return /* @__PURE__ */ jsxs4(
    "svg",
    {
      width: "146",
      height: "146",
      viewBox: "0 0 146 146",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx5("circle", { cx: "73", cy: "73", r: "73", fill: "#0052FF" }),
        /* @__PURE__ */ jsx5(
          "path",
          {
            d: "M73.323 123.729C101.617 123.729 124.553 100.832 124.553 72.5875C124.553 44.343 101.617 21.4463 73.323 21.4463C46.4795 21.4463 24.4581 42.0558 22.271 68.2887H89.9859V76.8864H22.271C24.4581 103.119 46.4795 123.729 73.323 123.729Z",
            fill: "white"
          }
        )
      ]
    }
  );
}

// public/logos/ethereum_logo.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function EthereumLogo() {
  return /* @__PURE__ */ jsxs5(
    "svg",
    {
      width: "500",
      height: "500",
      viewBox: "-120 -30 500 500",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx6("title", { children: "Ethereum" }),
        /* @__PURE__ */ jsx6("desc", { children: "Created with Sketch." }),
        /* @__PURE__ */ jsx6("defs", {}),
        /* @__PURE__ */ jsx6(
          "g",
          {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
            children: /* @__PURE__ */ jsxs5("g", { id: "ethereum", "fill-rule": "nonzero", children: [
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#343434",
                  points: "127.56 0 125.09 9.14 125.09 279.64 127.56 281.87 255.12 210.98"
                }
              ),
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#8C8C8C",
                  points: "127.56 0 0 210.98 127.56 281.87 127.56 150.86"
                }
              ),
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#3C3C3B",
                  points: "127.56 302.71 126.14 304.32 126.14 414.35 127.56 417 255.19 237.89"
                }
              ),
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#8C8C8C",
                  points: "127.56 417 127.56 302.71 0 237.89"
                }
              ),
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#141414",
                  points: "127.56 281.87 255.12 210.98 127.56 150.86"
                }
              ),
              /* @__PURE__ */ jsx6(
                "polygon",
                {
                  id: "Shape",
                  fill: "#393939",
                  points: "0 210.98 127.56 281.87 127.56 150.86"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// src/components/ui/select.tsx
import * as React3 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
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
      /* @__PURE__ */ jsx7(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx7(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx7(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx7(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React3.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx7(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs6(
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
      /* @__PURE__ */ jsx7(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx7(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx7(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx7("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx7(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx7(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx7(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
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
import { jsx as jsx8 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx8(
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
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
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
function TipDrawer({
  className,
  chainId,
  sendTransaction,
  writeContractAsync,
  chains,
  switchChain
}) {
  const [amount, setAmount] = useState("");
  const [selectedCurrencyAddress, setSelectedCurrencyAddress] = useState("");
  const chainLogoMap = {
    137: /* @__PURE__ */ jsx9(PolygonLogo, {}),
    10: /* @__PURE__ */ jsx9(OptimismLogo, {}),
    8453: /* @__PURE__ */ jsx9(BaseLogo, {}),
    1: /* @__PURE__ */ jsx9(EthereumLogo, {})
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
  return /* @__PURE__ */ jsxs7(Drawer, { children: [
    /* @__PURE__ */ jsx9(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsxs7(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: `flex items-center gap-2 ${className}`,
        children: [
          /* @__PURE__ */ jsx9(PointerIcon, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx9("span", { children: "Send Tip" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx9(DrawerContent, { children: /* @__PURE__ */ jsxs7("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs7(DrawerHeader, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx9(DrawerTitle, { children: "Send a tip!" }),
        /* @__PURE__ */ jsxs7(DrawerDescription, { children: [
          "Did this tool help you? Send a tip to show your appreciation!",
          " ",
          /* @__PURE__ */ jsx9("br", {}),
          /* @__PURE__ */ jsx9("br", {}),
          "This tool was created by",
          /* @__PURE__ */ jsxs7(
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
      /* @__PURE__ */ jsxs7("div", { className: "flex max-w-sm flex-col gap-6 p-4", children: [
        /* @__PURE__ */ jsx9("h3", { className: "text-lg font-semibold", children: "Select Chain" }),
        /* @__PURE__ */ jsx9("div", { className: "flex flex-wrap gap-2", children: chains.map((chain) => /* @__PURE__ */ jsx9(
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
        /* @__PURE__ */ jsxs7(
          Select,
          {
            onValueChange: (val) => setSelectedCurrencyAddress(val),
            children: [
              /* @__PURE__ */ jsx9(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx9(SelectValue, { placeholder: "Currency" }) }),
              /* @__PURE__ */ jsx9(SelectContent, { children: currencyMap[chainId]?.map((currency) => /* @__PURE__ */ jsxs7(SelectItem, { value: currency.address, children: [
                currency.name,
                " (",
                currency.symbol,
                ")"
              ] }, currency.address)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "p-4 pb-0", children: /* @__PURE__ */ jsx9("div", { className: "mt-3", children: /* @__PURE__ */ jsx9(
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
      /* @__PURE__ */ jsxs7(DrawerFooter, { children: [
        /* @__PURE__ */ jsx9(
          Button,
          {
            onClick: () => handleTransferERC20(selectedCurrencyAddress),
            children: "Send"
          }
        ),
        /* @__PURE__ */ jsx9(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx9(Button, { variant: "outline", children: "Cancel" }) })
      ] })
    ] }) })
  ] });
}
function PointerIcon({ ...props }) {
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx9("path", { d: "M22 14a8 8 0 0 1-8 8" }),
        /* @__PURE__ */ jsx9("path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }),
        /* @__PURE__ */ jsx9("path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" }),
        /* @__PURE__ */ jsx9("path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" }),
        /* @__PURE__ */ jsx9("path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
      ]
    }
  );
}
export {
  TipDrawer
};
