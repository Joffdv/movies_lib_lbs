import * as S from './styles';
import IMovie from '../../interfaces/IMovie';
import Showcase from '../../components/Showcase';

interface Props {
  morePopularMovies: IMovie[];
  topRatedMovies: IMovie[];
  comingSoonMovies: IMovie[];
}

const HomePage = ({
  morePopularMovies,
  topRatedMovies,
  comingSoonMovies,
}: Props) => {
  return (
    <S.HomePageContainer>
      <Showcase
        pathRedirect="/mais-populares"
        sliced
        title="Mais populares"
        movies={morePopularMovies}
      />
      <Showcase
        pathRedirect="/melhores-avaliados"
        sliced
        title="Melhores avaliados"
        movies={topRatedMovies}
      />
      <Showcase
        pathRedirect="/em-breve"
        sliced
        title="Em breve"
        movies={comingSoonMovies}
      />
    </S.HomePageContainer>
  );
};

export default HomePage;
