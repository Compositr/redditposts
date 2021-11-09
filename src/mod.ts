import { Options } from "./typings/Options.ts";
import { RawPost } from "./typings/Post.ts";
import { RedditPost } from "./typings/RedditPost.ts";

/**
 * Fetch posts in a subreddit
 * @async
 * @param subreddit Subreddit to fetch posts from. Do not include the r/ (e.g. "facepalm" is ok, but "r/facepalm" is not)
 * @param options (optional) An Options object.
 *
 * @example
 * await fetchPosts("facepalm")
 * await fetchPosts("showerthoughts", { category: "hot", filterNSFW: true, amount: 100 })
 * @returns Returns a Promise which resolves to an array of RedditPosts
 */
export async function fetchPosts(
  subreddit: string,
  options?: Options
): Promise<RedditPost[]> {
  if (!subreddit)
    throw new Error(
      "You forgot to specify a subreddit. Subreddits must be specified without the r/"
    );
  const { data } = await (
    await fetch(
      `https://reddit.com/r/${subreddit}/${
        options?.category ?? "hot"
      }.json?limit=${options?.amount ?? 10}`
    )
  ).json();
  const { children: postsRaw } = data;


  if (!postsRaw || !postsRaw.length)
    throw new Error(
      "[404] Could not get posts. Check that your subreddit name is correct."
    );

  const posts: RedditPost[] = postsRaw
    .filter((p: RawPost) => !(p.data.over_18 && options?.filterNSFW))
    .map((p: RawPost) => {
      const {
        subreddit,
        selftext,
        ups,
        upvote_ratio: upvoteRatio,
        thumbnail,
        url_overridden_by_dest: imageURL,
        title,
        edited,
        spoiler,
        over_18: NSFW,
        author,
      } = p.data;
      return {
        subreddit,
        selftext,
        ups,
        upvote_ratio: upvoteRatio,
        thumbnail,
        url_overridden_by_dest: imageURL,
        title,
        edited,
        spoiler,
        over_18: NSFW,
        author,
      };
    });
  return posts;
}