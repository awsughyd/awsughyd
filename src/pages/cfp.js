import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function CFPPage() {
  return (
    <Layout>
      <SEO title="Call for Proposals for AWS Community Day Hyderabad 2019" />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex mt-6 mb-12">
            <div className="flex-1">
              <p className="mt-4">
                We’re excited to open the Call for Proposals for AWS Community
                Day Hyderabad 2019! We are looking forward to see the
                submissions for three different tracks:
              </p>
              <ul className="pl-5 mt-2" style={{ listStyle: "unset" }}>
                <li>Beginner</li>
                <li>Intermediate</li>
                <li>Advanced</li>
              </ul>
              <h3 className="leading-tight text-lg font-bold text-black mt-8 -mb-2">
                Who should submit a proposal?
              </h3>
              <p className="mt-4">
                Anyone who has been working on AWS services and has an
                interesting story to tell or solution to a problem is welcome to
                submit a proposal
              </p>
              <h3 className="leading-tight text-lg font-bold text-black mt-8 -mb-2">
                What sort of proposals are we lokking for
              </h3>
              <p className="mt-4">
                Innovative use cases for AWS services, Real world case studies,
                Deep-dive into AWS services, Migration to AWS
              </p>
              <h3 className="leading-tight text-lg font-bold text-black mt-8 -mb-2">
                Guidelines
              </h3>
              <ul className="pl-5 mt-4" style={{ listStyle: "unset" }}>
                <li>
                  An outline or a draft presentation is required to be
                  considered for panel review
                </li>
                <li>
                  Mention the prerequisites - It’s good especially for
                  workshops, which will help attendees to brush-up a bit on the
                  prerequisite technologies before the session
                </li>
                <li>
                  No sales pitches, please! It’s nice to mention your company’s
                  product but please refrain from your talk being a pitch
                </li>
                <li>
                  Submissions will be reviewed by the panel and finalists will
                  be contacted by the organizing committee
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="shadow bg-white p-4 m-4 rounded-lg">
                <h1 className="text-xl text-center">CFP form coming soon</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CFPPage;
