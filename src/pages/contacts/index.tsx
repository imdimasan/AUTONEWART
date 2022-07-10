import { HeadMeta } from "components";
import { NextPage } from "next";

const Contacts: NextPage = () => {
  return (
    <>
      <HeadMeta
        title="Contact Page"
        description="It's contact page"
        keywords="contact, contacts"
        url="/contacts"
      />

      <h1>Contacts page</h1>
    </>
  );
};

export default Contacts;
