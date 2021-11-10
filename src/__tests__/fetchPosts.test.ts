import { fetchPosts } from "../mod.ts";
import {
  assert,
  assertExists,
} from "https://deno.land/std@0.114.0/testing/asserts.ts";

Deno.test("get posts from r/facepalm", async () => {
  const facepalms = await fetchPosts("facepalm");
  assertExists(facepalms);
  assert(facepalms);
});
