import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { IMuseum, IOpenHours, IGalleryImage } from "@models/main";

// LIB
import { getHoursForHeading, getAllMuseumsWithSlug } from "@lib/api";
import { getSingleMuseum, getSingleMuseumGallery } from "@lib/museums";

// CONTAINERS
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";

// COMPONENTS
import Head from "next/head";
import { Loader } from "@components/UI";

interface IProps {
  museum: IMuseum;
  hours: IOpenHours;
  gallery: IGalleryImage[];
}

const MuseumSinglePage: NextPage<IProps> = ({ museum, hours, gallery }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
      </Head>
      {router.isFallback ? (
        <Loader />
      ) : (
        <>
          <HeadingSection
            title={museum.title}
            image={museum.headerImage}
            museumType={museum.museumType}
            hours={hours}
            description={museum.description}
          />
          <GallerySection gallery={gallery} />
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const data = (await getSingleMuseum(context.params!.slug, locale)) || {};
  const hours = (await getHoursForHeading()) || [];
  const gallery =
    (await getSingleMuseumGallery(context.params!.slug, locale)) || [];
  return {
    props: {
      hours,
      museum: {
        ...data.museums[0],
      },
      gallery,
    },
  };
};

export async function getStaticPaths() {
  const allMuseums = await getAllMuseumsWithSlug();
  return {
    paths:
      allMuseums?.map((museum: IMuseum) => `/museums/${museum.slug}`) || [],
    fallback: true,
  };
}

export default MuseumSinglePage;