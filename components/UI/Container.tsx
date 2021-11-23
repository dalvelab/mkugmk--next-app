interface IProps {
  type: string;
  styles?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

export const Container: React.FC<IProps> = ({ type, styles, children }) => {
  return (
    <div className={type} style={styles}>
      {children}
    </div>
  );
};
