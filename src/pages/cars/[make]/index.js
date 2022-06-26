import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Cars = () => {
  const { query } = useRouter();
  const carMake = query.make.toUpperCase();
  console.log(query);

  return (
    <>
      <Head>
        <title>{carMake} car manufacturer</title>
      </Head>
      <h1>Car: {carMake}</h1>
    </>
  );
};

export default Cars;
