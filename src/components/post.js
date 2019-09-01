import React from "react";
import { Link } from "gatsby";

export function Post({ post }) {
  const {
    frontmatter: { title, date, fromNow },
    fields: { slug },
    excerpt
  } = post;
  return (
    <li className="shadow-md my-4 w-full px-4 py-6 rounded-lg md:mx-3 md:w-1/3 hover:shadow-lg hover:bg-gray-100">
      <Link to={slug} className="block w-full">
        <div className="font-light text-left text-xs">
          {date} ({fromNow})
        </div>
        <h2 className="text-lg font-medium mt-1">{title}</h2>
        <p className="mt-3">
          {excerpt}{" "}
          <span className="text-blue-500 text-sm font-light hover:font-medium">
            Read More
          </span>
        </p>
      </Link>
    </li>
  );
}
