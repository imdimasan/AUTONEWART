import { Breadcrumbs, Typography } from "@mui/material";
import { HeadMeta } from "components";
import cars from "data/cars.json";
import { ICar } from "interfaces";
import { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";

const MakePage: NextPage<ICar> = ({ car }: ICar) => {
  const carMake = car.make;

  return (
    <>
      <HeadMeta
        title={`Удаление катализатора в ${carMake} в Минске | AutoNewArt`}
        description={`${carMake} repairs and services`}
        keywords={`${carMake}`}
        url={`/catalytic/${carMake}`}
      />

      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/catalytic">
          <a>Catalytic</a>
        </Link>
        <Typography color="text.primary">{carMake}</Typography>
      </Breadcrumbs>

      <h1>Решение проблем с катализатором в {carMake}</h1>

      <ul>
        {cars
          .filter((cars) => cars.make === carMake)
          .map((car) => car.models.map((model, index) => <li key={index}>{model}</li>))}
      </ul>
    </>
  );
};

export default MakePage;

export const getStaticPaths = async () => {
  const paths = cars.map((car) => {
    return {
      params: { make: car.make.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const filteredCars = await cars.filter((el) => el.make === context?.params?.make);
  const car = filteredCars[0];

  return { props: { car } };
};
