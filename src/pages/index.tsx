// HOOKS
import { useTranslate } from "hooks/useTranslate";

// TYPES
import { NextPage, GetStaticProps } from "next";
import {
  IImage,
  IEvent,
  IOpenHours,
  INews,
  IMuseum,
  IGalleryImage,
} from "@models/main";

// LIB
import {
  getWelcomePageInfo,
  getGalleryForHome,
  getNewsForHome,
  getHoursForHeading,
} from "@lib/api";
import { getAllMuseumsForHome } from "@lib/museums";

// CONTAINERS
import { MuseumsContainer, NewsContainer } from "@containers/WelcomeContainers";
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";

// COMPONENTS
import Head from "next/head";

interface IProps {
  pageInfo: {
    title: string;
    description: string;
    image: IImage;
  };
  museums: IMuseum[];
  events: IEvent[];
  news: INews[];
  gallery: IGalleryImage[];
  hours: IOpenHours;
}

const WelcomePage: NextPage<IProps> = ({
  pageInfo,
  museums,
  news,
  gallery,
  hours,
}) => {
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
        title={pageInfo.title}
        image={pageInfo.image}
        museumType="museum"
        hours={hours}
        description={pageInfo.description}
      />
      <MuseumsContainer museums={museums} />
      <NewsContainer title={translate.titles.news} news={news} />
      <GallerySection gallery={gallery} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  const pageInfo = (await getWelcomePageInfo(locale)) || {};
  const museums = (await getAllMuseumsForHome(locale)) || [];
  const news = (await getNewsForHome(locale)) || [];
  const museumGalleries = (await getGalleryForHome()) || [];
  const hours = (await getHoursForHeading()) || [];
  return {
    props: {
      pageInfo,
      museums,
      news,
      gallery: [
        ...museumGalleries.map(
          (museumGallery: any) => museumGallery.gallery[0]
        ),
      ],
      hours,
    },
    revalidate: 1,
  };
};

export default WelcomePage;
