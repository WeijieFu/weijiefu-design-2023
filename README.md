This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use Node.js 22.23.3 (pinned in `.nvmrc`) and Yarn 1.22.22. With nvm installed:

```bash
nvm install
nvm use
npx --yes yarn@1.22.22 install --frozen-lockfile
npx --yes yarn@1.22.22 dev
```

Open http://localhost:3002. The site uses the Next.js Pages Router and Webpack.
Keep `yarn.lock` as the dependency lockfile; do not generate a package-lock.json.

```bash
yarn lint
yarn build
yarn start -p 3002
```

The shared image components use `next/legacy/image` to preserve existing layouts.
ESLint stays on 9.39.5 because the Next.js config's React, import, and accessibility
plugins do not yet declare ESLint 10 support. TypeScript 5.9.3 is installed for
lint tooling compatibility; the application remains JavaScript.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
