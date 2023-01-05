import React from 'react';
import IMovie from '../interfaces/IMovie';

interface Movie {
  results: IMovie[];
}

const useReqApi = (url: string | false) => {
  const [datas, setDatas] = React.useState<Movie | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const reqDatas = async () => {
      let res;
      let json;

      if (!url) return;

      try {
        setLoading(true);
        res = await fetch(url);
        json = await res.json();
      } catch (error) {
        json = null;
        return error;
      } finally {
        setDatas(json);
        setLoading(false);
        return json;
      }
    };

    reqDatas();
  }, [url]);

  return {
    datas,
    loading,
  };
};

export default useReqApi;
