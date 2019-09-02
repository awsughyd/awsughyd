import React from "react";

import { Post } from "../../templates/blog-post";

export default function BlogPost({ entry, widgetFor }) {
  return (
    <Post
      title={entry.getIn(["data", "title"])}
      date={entry.getIn(["data", "date"])}
      content={widgetFor("body")}
    />
  );
}
