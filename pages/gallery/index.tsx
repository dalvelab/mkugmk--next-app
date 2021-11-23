import { IGalleryImage } from "@models/main";

// HOOKS
import { useTranslate } from "hooks/useTranslate";

// LIB
import { getAllMuseumGalleries } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";

//  COMPONENTS
import Head from "next/head";
import Image from "next/image";
import { PageHeader } from "@components/Page";
import { Container } from "@components/UI";

interface IProps {
  gallery: IGalleryImage[];
}

const GalleryPage: NextPage<IProps> = ({ gallery }) => {
  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Галерея | Музейный комплекс УГМК</title>
      </Head>
      <PageHeader />
      <section className="section__gallery--all">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">
              {translate.welcomePage.gallery}
            </h2>
            <div className="cards__wrapper wrapper--flex">
              {gallery ? (
                gallery.map((image, index: number) => (
                  <div className="gallery__image" key={index}>
                    <Image
                      src={`${process.env.api}${image.url}`}
                      width="960"
                      height="350"
                      alt="Gallery Image"
                    />
                  </div>
                ))
              ) : (
                <h2>Нет фотографий</h2>
              )}
            </div>
          </>
        </Container>
      </section>
    </>
  );
};

export default GalleryPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getAllMuseumGalleries()) || null;
  return {
    props: { gallery: data },
    revalidate: 1,
  };
};
