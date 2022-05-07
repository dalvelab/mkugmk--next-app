import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { PageHeader } from "@components/Page";
import { ReactImage, Section } from "@components/UI";
import { getAllMuseumGalleries } from "@lib/api";
import { IGalleryImage } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

import styles from "./GalleryPage.module.scss";

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
      <Section title={translate.titles.gallery} margin="0 0 32px 0">
        <div className={styles.cardsWrapper}>
          {gallery ? (
            gallery.map((image, index: number) => (
              <div className={styles.galleryImage} key={index}>
                <ReactImage
                  src={image.url}
                  layout="fill"
                  alt="Изображение галереи"
                />
              </div>
            ))
          ) : (
            <h2>Нет фотографий</h2>
          )}
        </div>
      </Section>
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
