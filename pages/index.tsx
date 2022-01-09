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
  getAllMuseumsForHome,
  getGalleryForHome,
  getNewsForHome,
  getHoursForHeading,
} from "@lib/api";

// CONTAINERS
import { NewsSection } from "@containers/News";
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";

// COMPONENTS
import Head from "next/head";
import { Container } from "@components/UI";
import { CardMuseum } from "@components/Cards";
import { SwipeSection } from "@components/SwipeSection";

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
      <Container type="container--flex" styles={{ marginTop: "10px" }}>
        <SwipeSection length={museums.length} gap="20px">
          {museums.map((museum) => (
            <CardMuseum
              key={museum.id}
              title={museum.title}
              slug={museum.slug}
              image={museum.image}
            />
          ))}
        </SwipeSection>
      </Container>
      <NewsSection
        type="welcome__page--news"
        title={translate.titles.news}
        news={news}
      />
      <GallerySection gallery={gallery} type="welcome__page--gallery" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const pageInfo = (await getWelcomePageInfo(locale)) || null;
  const museums = (await getAllMuseumsForHome(locale)) || null;
  const news = (await getNewsForHome(locale)) || null;
  const museumGalleries = (await getGalleryForHome()) || null;
  const hours = (await getHoursForHeading()) || null;
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
