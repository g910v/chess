import React, { Suspense, lazy } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import routes from '../shared/routes';
import Spinner from './styled/Spinner';
import FilmBigCard from './FilmBigCard';
import TypeFilmCard from './TypeFilmCard';
import genres from '../shared/genres';
import countries from '../shared/countries';
import Layout from './Layout';

const FilmsPage = lazy(() => import('../pages/FilmsPage'));
const SeriesPage = lazy(() => import('../pages/SeriesPage'));
const PremieresPage = lazy(() => import('../pages/PremieresPage'));

const SpinContainer = styled.div`
  margin-top: 45vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content: React.FC = () => (
  <Suspense fallback={(
    <SpinContainer>
      <Spinner size={70} strokeWidth={4} />
    </SpinContainer>
    )}
  >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={routes.PREMIERES.path} />} />
        <Route path={routes.PREMIERES.path} element={<PremieresPage />} />
        <Route path={`${routes.FILMS.path}/*`} element={<FilmsPage />}>
          <Route path="top" element={<FilmBigCard />} />
          <Route path="genres/*" element={<TypeFilmCard types={genres} />} />
          <Route path="countries/*" element={<TypeFilmCard types={countries} />} />
        </Route>
        <Route path={routes.SERIES.path} element={<SeriesPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Content;
