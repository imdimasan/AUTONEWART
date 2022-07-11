import Head from "next/head";

interface IHeadMeta {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url: string;
}

const HeadMeta = ({ title, description, keywords, image, url }: IHeadMeta) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={process.env.REACT_APP_API_LIVESITE} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${process.env.REACT_APP_API_URL}${url}`} />
      <meta property="og:image" content={image || process.env.REACT_APP_API_LOGO} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || process.env.REACT_APP_API_LOGO} />
    </Head>
  );
};

export default HeadMeta;
