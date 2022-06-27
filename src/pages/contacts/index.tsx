import { HeadMeta } from "components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Contacts: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="Contact Page"
        description="It's contact page"
        keywords="contact, contacts"
        url={router.asPath}
      />

      <h1>Contacts page</h1>
    </>
  );
};

export default Contacts;
