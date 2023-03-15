import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { movieList } from '../../data';
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const { state } = useContext(SearchContext);

    const { sortBy, genre, query } = state;

    useEffect(() => {
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=c6dea75aab743d997a816226d66d605e&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=c6dea75aab743d997a816226d66d605e&with_genres=${genre}&sort_by=${sortBy}`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [genre, sortBy, query]);

    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card movie={movie} key={movie.id} />
            ))}
        </div>
    );
};
