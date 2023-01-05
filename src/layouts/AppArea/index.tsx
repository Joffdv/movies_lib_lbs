import * as S from './styles';

interface Props {
  children: JSX.Element;
}

const AppArea = ({ children }: Props): JSX.Element => {
  return <S.AppAreaWrapper>{children}</S.AppAreaWrapper>;
};

export default AppArea;
