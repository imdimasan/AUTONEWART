import { HeadMeta } from "components";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <HeadMeta
        title="Home Page"
        description="App starts from this page"
        keywords="home, homepage"
        url=""
      />
      <h1>Home Page AUTONEWART</h1>
    </>
  );
};

export default HomePage;
