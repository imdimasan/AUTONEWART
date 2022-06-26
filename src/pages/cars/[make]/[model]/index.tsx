import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Models = () => {
  const { query } = useRouter();
  const carMake = query.make?.toString().toUpperCase();
  const carModel = query.model?.toString().toUpperCase();
  console.log(query);

  return (
    <>
      <Head>
        <title>
          {carMake} {carModel}
        </title>
      </Head>
      <h1>
        Model: {carMake} {carModel}
      </h1>
    </>
  );
};

export default Models;
