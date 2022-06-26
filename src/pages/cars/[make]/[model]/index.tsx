import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { NextPage } from "next";

const Models: NextPage = () => {
  const { query } = useRouter();
  const carMake = query.make?.toString().toUpperCase();
  const carModel = query.model?.toString().toUpperCase();

  return (
    <>
      <Head>
        <title>
          {carMake} {carModel}
        </title>
      </Head>

      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">HOME</Link>
        <Link href={`/cars/${query.make}`}>
          <a>{carMake}</a>
        </Link>
        <Typography color="text.primary">{carModel}</Typography>
      </Breadcrumbs>
      <h1>
        Model: {carMake} {carModel}
      </h1>
    </>
  );
};

export default Models;
