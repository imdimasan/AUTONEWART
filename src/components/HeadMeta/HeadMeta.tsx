import { META } from "constants/meta";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface IHeadMeta {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

const HeadMeta = ({ title, description, keywords, image }: IHeadMeta) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content={META.SITE_NAME} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${META.SITE_URL}${router.asPath}`} />
      <meta property="og:image" content={image || META.SITE_LOGO} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || META.SITE_LOGO} />
    </Head>
  );
};

export default HeadMeta;
