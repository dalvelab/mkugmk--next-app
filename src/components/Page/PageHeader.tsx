import { useRouter } from "next/router";

import { Container } from "@components/UI";

export const PageHeader: React.FC = () => {
  const router = useRouter();

  const onPageReturn = () => {
    router.back();
  };

  return (
    <div className="page__header">
      <button className="back__button" onClick={onPageReturn}>
        <i className="far fa-arrow-left"></i>Назад
      </button>
    </div>
  );
};
