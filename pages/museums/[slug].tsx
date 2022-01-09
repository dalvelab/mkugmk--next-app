import { useRouter } from "next/router";

// TYPES
import { NextPage, GetStaticProps } from "next";
import { IMuseum, IOpenHours, IGalleryImage } from "@models/main";

// LIB
import {
  getSingleMuseum,
  getHoursForHeading,
  getAllMuseumsWithSlug,
  getSingleMuseumGallery,
} from "@lib/api";

// CONTAINERS
import { GallerySection } from "@containers/Gallery";
import { HeadingSection } from "@containers/Heading";

// COMPONENTS
import Head from "next/head";
import { Loader } from "@components/UI";
import { Container } from "@components/UI";

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
        <Container type="container--flex">
          <Loader />
        </Container>
      ) : (
        <>
          <HeadingSection
            title={museum.title}
            image={museum.headerImage}
            museumType={museum.museumType}
            hours={hours}
            description={museum.description}
          />
          <section className="section__stub">
            <Container type="container--flex">
              <h2 className="section__heading">Коллекции</h2>
              <div className="cards__wrapper wrapper--grid">
                <div>
                  Заглушка (нужно определить что там будет) <br /> Пример:{" "}
                  <br />
                  Автомобили начала XX века, <br /> Представительские авто XX
                  века
                </div>
                <div>Заглушка (нужно определить что там будет)</div>
                <div>Заглушка (нужно определить что там будет)</div>
              </div>
            </Container>
          </section>
          <section className="section__stub">
            <Container type="container--flex">
              <h2 className="section__heading">Реставрация</h2>
              <div className="cards__wrapper wrapper--grid">
                <div>
                  Заглушка (нужно определить что там будет) <br /> Пример:{" "}
                  <br /> Как поезд из тайги в Пышму везли <br /> "Дуглас" из
                  Южной Америки
                </div>
                <div>Заглушка (нужно определить что там будет)</div>
                <div>Заглушка (нужно определить что там будет)</div>
              </div>
            </Container>
          </section>
          <section className="section__stub">
            <Container type="container--flex">
              <h2 className="section__heading">Экскурсии</h2>
              <div className="cards__wrapper wrapper--grid">
                <div>
                  Заглушка (нужно определить что там будет) <br /> Пример:{" "}
                  <br /> Авто XX века за 2 часа <br /> Война в облаках (1 час)
                </div>
                <div>Заглушка (нужно определить что там будет)</div>
                <div>Заглушка (нужно определить что там будет)</div>
              </div>
            </Container>
          </section>
          <GallerySection gallery={gallery} type="museum__page--gallery" />
        </>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const data = (await getSingleMuseum(params!.slug, locale)) || null;
  const hours = (await getHoursForHeading()) || null;
  const gallery = (await getSingleMuseumGallery(params!.slug, locale)) || null;
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
