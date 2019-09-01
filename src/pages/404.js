import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/404.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="404"
        />
        <h2 className="text-2xl font-light mt-8 p-3 text-center">
          Sorry, page not found.
        </h2>
        <p className="text-blue-500 text-xl p-3 text-center">
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
