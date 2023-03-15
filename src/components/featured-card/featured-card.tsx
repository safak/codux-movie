import styles from './featured-card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface FeaturedCardProps {
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
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-featured-cards-and-templates
 */
export const FeaturedCard = ({ className, movie }: FeaturedCardProps) => {
    const { dispatch } = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root, className)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}className={styles.favoriteImg} />
            <div className={styles.detail}>
                <h1 className={styles.favoriteTitle}>{movie?.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div
                className={styles.delete}
                onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
            >
                <img src="./delete.png" />
            </div>
        </div>
    );
};
