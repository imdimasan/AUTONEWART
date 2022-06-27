import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { NextPage } from "next";
import { HeadMeta } from "components";

const Models: NextPage = () => {
  const router = useRouter();
  const carMake = router.query.make?.toString().toUpperCase();
  const carModel = router.query.model?.toString().toUpperCase();

  return (
    <>
      <HeadMeta
        title={`${carMake} ${carModel} car manufacturer`}
        description={`${carMake} ${carModel} repairs and services`}
        keywords={`${carMake}, ${carModel}`}
        url={router.asPath}
      />

      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">HOME</Link>
        <Link href={`/cars/${router.query.make}`}>
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
