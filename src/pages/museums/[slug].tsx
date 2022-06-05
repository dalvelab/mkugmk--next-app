import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { HeadingSection } from "@containers/Heading";
import { GallerySection } from "@containers/Gallery";
import { getSingleMuseumPage } from "@lib/pages";
import { getMuseumsStaticPaths } from "@lib/paths";
import { IMuseum } from "@models/main";

interface IProps {
  museum: IMuseum;
}

const MuseumSinglePage: NextPage<IProps> = (props) => {
  const { museum } = props;

  return (
    <>
      <Head>
        <title>Музейный комплекс УГМК</title>
      </Head>
      <HeadingSection
        title={museum.title}
        image={museum.headerImage}
        description={museum.description}
      />
      <GallerySection gallery={museum.gallery} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { museum } = (await getSingleMuseumPage(context.params?.slug)) || {};
  return {
    props: {
      museum,
    },
  };
};

export async function getStaticPaths() {
  const { data } = (await getMuseumsStaticPaths()) || [];
  return {
    paths: data.map((museum) => `/museums/${museum.attributes.slug}`),
    fallback: true,
  };
}

export default MuseumSinglePage;
