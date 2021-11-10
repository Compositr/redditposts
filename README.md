# redditposts

A simple wrapper to fetch reddit posts from a subreddit using the `.json` feature.

# Installation

## Deno

Simply import from our https://deno.land/x/ URL.

```ts
import { fetchPosts } from "https://deno.land/x/redditposts/src/mod.ts";
```

## NodeJS

We do not officially support NodeJS. However it's really simple to port over to Node - simply download the code from our [Github Repo](https://github.com/CoolJim/redditposts) and import the `src/mod.ts` file. **Remember to polyfill the `fetch` function with something similar (e.g. [`node-fetch`](https://www.npmjs.com/package/node-fetch) is a developer favourite)**

The above assumes you are using TypeScript. If you are using JavaScript, you can do the same but strip away the types.

# Examples

All examples assume you are using ESM and Deno

```ts
// Get all non-nsfw posts from the r/facepalm subreddit
import { fetchPosts } from "https://deno.land/x/redditposts/src/mod.ts";
const facepalms = await fetchPosts("facepalm", { filterNSFW: true });
console.log(facepalms);
```

```ts
// Get the top 100 memes in r/memes
import { fetchPosts } from "https://deno.land/x/redditposts/src/mod.ts";
const lotsOfMemes = await fetchPosts("memes", { amount: 100, category: "top" });
console.log(lotsOfMemes) // A huge array
```

# License

MIT License. See `LICENSE`
