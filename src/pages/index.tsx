import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import {
  MuseumsContainer,
  PostsContainer,
} from "@containers/WelcomeContainers";
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";
import { getWelcomePageInfo } from "@lib/api";
import { IImage, IPost, IMuseum } from "@models/main";

interface IProps {
  museums: IMuseum[];
  welcome: {
    title: string;
    description: string;
    image: IImage;
  };
  posts: IPost[];
  gallery: IImage[];
}

const WelcomePage: NextPage<IProps> = (props) => {
  const { museums, welcome, posts, gallery } = props;

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
      <PostsContainer posts={posts} />
      <GallerySection gallery={gallery} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = (await getWelcomePageInfo(locale)) || null;

  return {
    props: data,
  };
};

export default WelcomePage;
