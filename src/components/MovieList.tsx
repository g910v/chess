import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRootStore } from '../hooks';
import FilmBigCard from './FilmBigCard';
import { Spinner } from './styled';
import genres from '../shared/genres';
import countries from '../shared/countries';
import { IPremiereFilters } from '../stores/FilmsStore';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyFilmList = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

interface Props {
  type: 'FILM' | 'TV_SERIES' | 'PREMIERES',
  isTop?: boolean,
  premiereFilters?: IPremiereFilters,
}

const MovieList: React.FC<Props> = ({ type, isTop, premiereFilters }) => {
  const { filmsStore } = useRootStore();
  const params = useParams();

  useEffect(() => {
    if (isTop) {
      filmsStore.getTopMovies({
        type: type === 'FILM' ? 'TOP_250_MOVIES' : 'TOP_250_TV_SHOWS',
      });
    } else if (type === 'PREMIERES' && premiereFilters) {
      filmsStore.getPremiereFilms(premiereFilters);
    } else if (type !== 'PREMIERES') {
      const genre = genres.find(i => i.short === params.genre);
      const country = countries.find(i => i.short === params.country);
      filmsStore.getFilms({
        type,
        genre: genre?.id,
        country: country?.id,
        year: params.year ? Number(params.year) : undefined,
      });
    }
  }, [filmsStore, params, type, isTop, premiereFilters]);

  return (
    <Container>
      {
        filmsStore.filmsLoading && <SpinnerContainer><Spinner size={50} strokeWidth={2} /></SpinnerContainer>
      }
      {
        (!filmsStore.filmsLoading && !!filmsStore.filmList.length)
        && filmsStore.filmList.map(f => <FilmBigCard key={f.kId} film={f} />)
      }
      {
        (!filmsStore.filmsLoading && !filmsStore.filmList.length)
        && <EmptyFilmList>Список { type === 'TV_SERIES' ? 'сериалов' : 'фильмов' } отсуствует :(</EmptyFilmList>
      }
    </Container>
  );
};

export default observer(MovieList);
