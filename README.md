# Astro + Scalar API Documentation

```sh
yarn create astro@latest -- --template minimal
# Then drop the docs.astro file into your project
```

> 🧑‍🚀 **Seasoned astronaut?** Simply drop the [`docs.astro`](/src/pages/api/docs.astro) file into your existing Astro project - no packages required!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   │   └── layout.astro
│   ├── pages/
│   │   └── api/
│   │       └── docs.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The [`src/pages/api/docs.astro`](/src/pages/api/docs.astro) file demonstrates how to integrate [Scalar](https://scalar.com/) - a modern API documentation tool - into your Astro site. No additional packages needed, just copy the file!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build) - Learn how Astro works
- [Scalar Documentation](https://scalar.com/) - Beautiful API documentation tool
- [OpenAPI Specification](https://swagger.io/specification/) - API specification standard
