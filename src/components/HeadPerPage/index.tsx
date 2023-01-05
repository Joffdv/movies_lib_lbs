import Head from 'next/head';

interface Props {
  title: string;
}

const HeadPerPage = ({ title }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Esta aplicação, desenvolvida para estudo, tem como objetivo apresentar uma lista de filmes separados por categorias, semelhante ao portal do IMDb e TMDB. Para a construção deste App foi necessário o consumo da Api gratuita do TMDB."
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:site_name" content="MoviesLibLBS" />
      <meta
        property="og:description"
        content="Esta aplicação, desenvolvida para estudo, tem como objetivo apresentar uma lista de filmes separados por categorias, semelhante ao portal do IMDb e TMDB. Para a construção deste App foi necessário o consumo da Api gratuita do TMDB."
      />
    </Head>
  );
};

export default HeadPerPage;
