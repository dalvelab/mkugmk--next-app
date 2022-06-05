import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { isEmpty } from "ramda";

import { Section } from "@components/UI";
import { GallerySection } from "@containers/Gallery";
import { getGalleryPage } from "@lib/api";
import { IMuseum } from "@models/main";
import { useTranslate } from "@hooks/useTranslate";

import styles from "./GalleryPage.module.scss";

interface IProps {
  museums: IMuseum[];
}

const GalleryPage: NextPage<IProps> = (props) => {
  const { museums } = props;

  const translate = useTranslate();

  return (
    <>
      <Head>
        <title>Галерея | Музейный комплекс УГМК</title>
      </Head>
      <Section title={translate.titles.gallery} margin="0 0 32px 0" isBackLink>
        {isEmpty(museums) && <h2>Нет фотографий</h2>}
        {!isEmpty(museums) &&
          museums.map((museum) => (
            <div className={styles.museumsWrapper} key={museum.id}>
              <h3>{museum.title}</h3>
              <GallerySection gallery={museum.gallery} hasTitle={false} />
            </div>
          ))}
      </Section>
    </>
  );
};

export default GalleryPage;

export const getStaticProps: GetStaticProps = async () => {
  const { museums } = (await getGalleryPage()) || [];
  return {
    props: { museums },
    revalidate: 1,
  };
};
