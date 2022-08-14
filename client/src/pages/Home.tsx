import React from "react";
import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperties,
  MailList,
  Footer,
} from "../components";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header type={"not-list"} />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};
