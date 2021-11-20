import { useRouter } from "next/router";

// COMPONENTS
import { Container } from "@components/UI";

export const PageHeader: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="page__header">
      <Container type="container--flex">
        <button className="back__button" onClick={handleBack}>
          <i className="far fa-arrow-left"></i>Назад
        </button>
      </Container>
    </div>
  );
};
