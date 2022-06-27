import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { cars } from "constants/cars";
import { HeadMeta } from "components";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="Home Page"
        description="App starts from this page"
        keywords="home, homepage"
        url={router.asPath}
      />

      <ul>
        {cars
          .sort((a, b) => a.make.localeCompare(b.make))
          .map((car, index) => (
            <li key={index}>
              <Link href={`/cars/${car.make}`}>
                <a>{car.make}</a>
              </Link>

              {car.models && (
                <ul>
                  {car.models.map((el, index) => (
                    <li key={index}>
                      <Link href={`/cars/${car.make}/${el}`}>
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
