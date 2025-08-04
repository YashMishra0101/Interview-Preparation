/*
#23)What is ts and tsx in react vite ?

  --  ts = Typescript and tsx = Typescript XML.
  - .ts : This is a TypeScript file that can contain plain TypeScript code. It does **not** support JSX syntax.
  - .tsx : This is a TypeScript file that **does** support JSX syntax, allowing you to write React components.
  - .ts for files that do not contain any React components or JSX.
  - .tsx for files that contain React components, JSX, or any JSX expressions.
  - Use `.ts` for standard TypeScript files without JSX.
  - Use `.tsx` when writing React components that include JSX.

> Using `.ts` File

This file contains TypeScript code without any JSX:

```typescript
// example.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet('Yashu'));


>  Using `.tsx` File
This file contains a React component with JSX:

```typescript
// ExampleComponent.tsx

import React from 'react';

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello, Yashu!</h1>
    </div>
  );
};

export default ExampleComponent;
*/