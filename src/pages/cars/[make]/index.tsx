import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { cars } from "constants/cars";
import { NextPage } from "next";
import { HeadMeta } from "components";

const Cars: NextPage = () => {
  const router = useRouter();
  const carMake = router.query.make?.toString().toUpperCase();

  return (
    <>
      <HeadMeta
        title={`${carMake} car manufacturer`}
        description={`${carMake} repairs and services`}
        keywords={`${carMake}`}
        url={router.asPath}
      />

      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Typography color="text.primary">{carMake}</Typography>
      </Breadcrumbs>

      <h1>Car: {carMake}</h1>

      <ul>
        {cars
          .filter((cars) => cars.make === router.query.make)
          .map((car) =>
            car.models.map((model, index) => (
              <li key={index}>
                <Link href={`/cars/${car.make}/${model}`}>
                  <a>{model}</a>
                </Link>
              </li>
            ))
          )}
      </ul>
    </>
  );
};

export default Cars;
