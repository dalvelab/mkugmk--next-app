import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { MuseumsContainer, NewsContainer } from "@containers/WelcomeContainers";
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";
import { getWelcomePageInfo } from "@lib/pages";
import { useTranslate } from "@hooks/useTranslate";
import { IImage, INews, IMuseum } from "@models/main";

interface IProps {
  museums: IMuseum[];
  welcome: {
    title: string;
    description: string;
    image: IImage;
  };
}

const WelcomePage: NextPage<IProps> = (props) => {
  const { museums, welcome } = props;

  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
        <meta
          name="description"
          content="Музей автомобильной и гражданской техники"
        />
      </Head>
      <HeadingSection
        title={welcome.title}
        image={welcome.image}
        description={welcome.description}
      />
      <MuseumsContainer museums={museums} />
      {/* <NewsContainer title={translate.titles.news} news={news} />
      <GallerySection gallery={gallery} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  const data = (await getWelcomePageInfo(locale)) || {};

  return {
    props: data,
    revalidate: 1,
  };
};

export default WelcomePage;
