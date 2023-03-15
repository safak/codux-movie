import styles from './featured.module.scss';
import classNames from 'classnames';
import { FeaturedCard } from '../featured-card/featured-card';
import { movieList } from '../../data';
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";

export interface FeaturedProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-featureds-and-templates
 */
export const Featured = ({ className }: FeaturedProps) => {
    
    const {state, dispatch} = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>
                <h1>Favorites</h1>
            </div>
            {state.favorites.length>0 && state.favorites.map((movie) => (
                <FeaturedCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};
