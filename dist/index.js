"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  TipDrawer: () => TipDrawer
});
module.exports = __toCommonJS(src_exports);

// src/components/Tip.tsx
var import_react = require("react");
var import_wagmi = require("wagmi");

// src/components/ui/drawer.tsx
var React = __toESM(require("react"));
var import_vaul = require("vaul");

// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/drawer.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_vaul.Drawer.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
var DrawerTrigger = import_vaul.Drawer.Trigger;
var DrawerPortal = import_vaul.Drawer.Portal;
var DrawerClose = import_vaul.Drawer.Close;
var DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_vaul.Drawer.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  }
));
DrawerOverlay.displayName = import_vaul.Drawer.Overlay.displayName;
var DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_vaul.Drawer.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  }
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_vaul.Drawer.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = import_vaul.Drawer.Title.displayName;
var DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_vaul.Drawer.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = import_vaul.Drawer.Description.displayName;

// src/components/Tip.tsx
var import_viem = require("viem");

// src/components/ui/input.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_polygon_logo = __toESM(require("public/logos/polygon_logo"));
var import_optimism_logo = __toESM(require("public/logos/optimism_logo"));
var import_base_logo = __toESM(require("public/logos/base_logo"));
var import_ethereum_logo = __toESM(require("public/logos/ethereum_logo"));

// src/components/ui/select.tsx
var React3 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React3.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollUpButton, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/button.tsx
var React4 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  const [amount, setAmount] = (0, import_react.useState)("");
  const chainId = (0, import_wagmi.useChainId)();
  const { sendTransaction } = (0, import_wagmi.useSendTransaction)();
  const { writeContractAsync } = (0, import_wagmi.useWriteContract)();
  const { chains, switchChain } = (0, import_wagmi.useSwitchChain)();
  const [selectedCurrencyAddress, setSelectedCurrencyAddress] = (0, import_react.useState)("");
  const chainLogoMap = {
    137: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_polygon_logo.default, {}),
    10: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_optimism_logo.default, {}),
    8453: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_base_logo.default, {}),
    1: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_ethereum_logo.default, {})
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
          abi: import_viem.erc20Abi,
          functionName: "transfer",
          args: [
            process.env.NEXT_PUBLIC_TIP_ADDRESS,
            (0, import_viem.parseEther)(amount)
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
        value: (0, import_viem.parseEther)(amount)
      });
    } catch (error) {
      console.error(error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Drawer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: `flex items-center gap-2 ${className}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PointerIcon, { className: "h-5 w-5" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "Send Tip" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DrawerContent, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DrawerHeader, { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DrawerTitle, { children: "Send a tip!" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DrawerDescription, { children: [
          "Did this tool help you? Send a tip to show your appreciation!",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
          "This tool was created by",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex max-w-sm flex-col gap-6 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-lg font-semibold", children: "Select Chain" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-wrap gap-2", children: chains.map((chain) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          Select,
          {
            onValueChange: (val) => setSelectedCurrencyAddress(val),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectValue, { placeholder: "Currency" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectContent, { children: currencyMap[chainId]?.map((currency) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(SelectItem, { value: currency.address, children: [
                currency.name,
                " (",
                currency.symbol,
                ")"
              ] }, currency.address)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "p-4 pb-0", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DrawerFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Button,
          {
            onClick: () => handleTransferERC20(selectedCurrencyAddress),
            children: "Send"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DrawerClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "outline", children: "Cancel" }) })
      ] })
    ] }) })
  ] });
}
function PointerIcon({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M22 14a8 8 0 0 1-8 8" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TipDrawer
});
