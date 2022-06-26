import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { cars } from "constants/cars";

const Cars = () => {
  const { query } = useRouter();
  const carMake = query.make?.toString().toUpperCase();

  return (
    <>
      <Head>
        <title>{carMake} car manufacturer</title>
      </Head>

      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Typography color="text.primary">{carMake}</Typography>
      </Breadcrumbs>

      <h1>Car: {carMake}</h1>

      <ul>
        {cars
          .filter((cars) => cars.make === query.make)
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
