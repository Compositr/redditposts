import { RedditURL } from "./URL.ts";

export interface RedditPost {
  subreddit: string;
  selftext: string;
  ups: number;
  upvoteRatio: number;
  thumbnail: RedditURL;
  imageURL: RedditURL;
  title: string;
  edited: boolean;
  spoiler: boolean;
  NSFW: boolean;
  author: string;

  awards: Award[];
}

export interface Award {
  icon: {
    url: RedditURL;
    format: string;
  };
  name: string;
}
