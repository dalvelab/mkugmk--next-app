import { NextPage, GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { museum } = (await getSingleMuseumPage(params?.slug)) || {};
  return {
    props: {
      museum,
    },
  };
};

export default MuseumSinglePage;
