import styles from './card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root, className)}>
            <img
                className={styles.cardImg}
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className={styles.detail}>
                <div className={styles.top}>
                    <h1 className={styles.title}>{movie.title.substring(0, 26)}</h1>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.rating}>IMDB: {movie.vote_average.toFixed(1)}</span>
                    <p className={styles.desc}>{movie.overview?.substring(0, 220)}</p>
                    <button
                        className={styles.addButton}
                        onClick={() => dispatch({ type: 'ADD_MOVIE', payload: movie })}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};
