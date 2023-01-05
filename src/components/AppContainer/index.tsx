import * as S from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppContainer = ({ children }: Props) => {
  return <S.AppContainerWrapper>{children}</S.AppContainerWrapper>;
};

export default AppContainer;
