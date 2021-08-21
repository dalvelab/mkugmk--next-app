import { useSelector } from "react-redux";

// LOCALES
import en from "../../locales/en";
import ru from "../../locales/ru";

// LIB
import { getAllGallery } from "@lib/api";

// TYPES
import { NextPage, GetStaticProps } from "next";

//  COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";

interface GalleryAllProps {
  gallery: any;
}

interface RootState {
  UI: {
    language: string;
  };
}

const GalleryAll: NextPage<GalleryAllProps> = ({ gallery }) => {
  const language = useSelector((state: RootState) => state.UI.language);

  const translate = language === "ru" ? ru : en;

  return (
    <>
      <Head>
        <title>События | Музейный комплекс УГМК</title>
      </Head>
      <section className="section__gallery--all">
        <Container type="container--flex">
          <>
            <h2 className="section__heading">
              {translate.welcomePage.gallery}
            </h2>
            <div className="cards__wrapper wrapper--flex">
              {gallery ? (
                gallery.museums.map((museum: any) =>
                  museum.gallery.map((image: any, index: number) => (
                    <div className="gallery__image" key={index}>
                      <Image
                        src={`${process.env.api}${image.url}`}
                        width="960"
                        height="350"
                        alt="Gallery Image"
                      />
                    </div>
                  ))
                )
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

export default GalleryAll;

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getAllGallery()) || null;
  return {
    props: { gallery: data },
    revalidate: 1,
  };
};
