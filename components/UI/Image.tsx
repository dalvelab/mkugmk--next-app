import Image from "next/image";
import { isNil, isEmpty } from "ramda";

interface IProps {
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
  layout?: "fixed" | "fill" | "responsive" | "intrinsic";
}

export const ReactImage: React.FC<IProps> = (props) => {
  const { src, width, height, alt, layout } = props;

  const imagePath = process.env.api;

  return (
    <>
      {isNil(src) || isEmpty(src) ? (
        <div className="image__stub">Не загружено изображение</div>
      ) : (
        <Image
          src={`${imagePath}${src}`}
          width={width}
          height={height}
          alt={alt}
          layout={layout}
        />
      )}
    </>
  );
};
