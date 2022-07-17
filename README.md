## Getting Started

Project uses **eslint & stylelint** prettiers. For working properly VSCode should be configured for **esling & stylelint** settings at settings.json:

```bash
{
  "files.associations": {
    "*.jsx": "javascriptreact"
  },
  "files.eol": "\n",
  "scss.validate": false,
  "css.validate": false,
  "less.validate": false,
  "stylelint.validate": ["css", "scss"],
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "typescript.updateImportsOnFileMove.enabled": "always",
"javascript.updateImportsOnFileMove.enabled": "always"
}
```

Make sure your VSCode has required extensions:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
* [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
* [Prettier - Code formatter
](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Enviroment Variables
Project uses **ENV variables*. Add necessary ENV after cloning:
```
NEXT_PUBLIC_LIVESITE = Site Name
NEXT_PUBLIC_LOGO = https://site.com/logo.png
NEXT_PUBLIC_URL = https://site.com
NEXT_PUBLIC_TELEGRAM_TOKEN = 1195246232:Afgt43jjngfdug438jkdfs9PsyL8x0Jc
NEXT_PUBLIC_TELEGRAM_CHATID = -012345678

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
