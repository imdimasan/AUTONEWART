import { HeadMeta } from "components";
import cars from "data/cars.json";
import { ICars, IModel } from "interfaces";
import { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import classes from "./CatalyticPage.module.scss";

const CatalyticPage: NextPage<ICars> = ({ cars }: ICars) => {
  return (
    <>
      <HeadMeta
        title="Home Page"
        description="App starts from this page"
        keywords="home, homepage"
        url="/catalytic"
      />

      <h1>Удаление и замена катализаторов в Минске</h1>

      <ul className={classes.make}>
        {cars
          .sort((a: IModel, b: IModel) => a.make.localeCompare(b.make))
          .map((car: IModel, index: number) => (
            <li key={index}>
              <Link href={`/catalytic/${car.make}`}>
                <a>{car.make}</a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default CatalyticPage;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps = async (context: GetStaticPropsContext) => {
  return { props: { cars } };
};
