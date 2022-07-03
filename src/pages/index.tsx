import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { cars } from "constants/cars";
import { HeadMeta } from "components";
import classes from "./HomePage.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta
        title="Home Page"
        description="App starts from this page"
        keywords="home, homepage"
      />

      <ul className={classes.make}>
        {cars
          .sort((a, b) => a.make.localeCompare(b.make))
          .map((car, index) => (
            <li key={index}>
              <Link href={`/catalytic/${car.make}`}>
                <a>{car.make}</a>
              </Link>

              {car.models && (
                <ul className={classes.models}>
                  {car.models.map((el, index) => (
                    <li key={index}>
                      <Link href={`/catalytic/${car.make}/${el}`}>
                        <a>{el}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
