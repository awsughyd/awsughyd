import React from "react";
import PropTypes from "prop-types";
import { Footer } from "./footer";
import { Header } from "./header";

function Layout({ children, headerHidden }) {
  return (
    <div className="min-h-screen text-gray-900">
      {!headerHidden && <Header />}
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  headerHidden: false
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerHidden: PropTypes.bool
};

export default Layout;
