# hone-tip-drawer

**Version: 0.0.27**

## Description

hone-tip-drawer is a React component built with wagmi & shadCN that allows you to accept direct tips on your website. It supports multiple blockchain networks and various ERC-20 tokens.

## Installation

Install the package via npm:

```bash
npm install hone-tip-drawer
```

Or via yarn:

```bash
yarn add hone-tip-drawer
```

## Usage

To use the TipDrawer component, import it into your project and include it in your JSX:

```jsx
Copy code
import React from 'react';
import { TipDrawer } from 'hone-tip-drawer';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      <TipDrawer className="my-custom-class" />
    </div>
  );

export default App;
}
```

## Environment Variables

Make sure to set the following environment variable in your project:

- `NEXT_PUBLIC_TIP_ADDRESS`: The address where the tips will be sent.

## Features

- Supports multiple blockchains including Ethereum, Polygon, Optimism, and Base.
- Allows tipping with various ERC-20 tokens.
- User-friendly drawer interface for selecting chain and currency.
- Simple integration with existing React applications.

## Dependencies

The package relies on the following dependencies:

- `@radix-ui/react-dialog: ^1.0.5`
- `@radix-ui/react-icons: ^1.3.0`
- `@radix-ui/react-select: ^2.0.0`
- `@radix-ui/react-slot: ^1.0.2`
- `@tanstack/react-query: ^5.45.1`
- `class-variance-authority: ^0.7.0`
- `clsx: ^2.1.1`
- `lucide-react: ^0.395.0`
- `tailwind-merge: ^2.3.0`
- `tailwindcss-animate: ^1.0.7`
- `vaul: ^0.9.1`
- `viem: ^2.15.1`
- `wagmi: ^2.10.2`

## Development

To build the package, run:

```bash
npm run build
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## Author

Created by hone1er.
