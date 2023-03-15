import styles from './menu.module.scss';
import classNames from 'classnames';
import { sortBy, genres } from '../../data';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    // const [type, setType] = useState<string>('All');
    // const [genre, setGenre] = useState<string>('All');

    const { dispatch, state } = useContext(SearchContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="/logo.png" className={styles.logoImg} />
                <h6 className={styles.logoText}>Lamaovie</h6>
            </div>
            <span className={styles.queryTitle}>TYPE</span>
            <hr className={styles.hr} />
            <ul className={styles.menuList}>
                {sortBy.map((item) => (
                    <li
                        className={classNames(
                            styles.listItem,
                            state.sortBy === item.q && styles.active
                        )}
                        key={item.q}
                        onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.queryTitle}>GENRE</span>
            <hr className={styles.hr} />
            <ul className={styles.menuList}>
                {genres.map((item) => (
                    <li
                        onClick={(e) => dispatch({ type: 'ADD_GENRE', payload: item.id })}
                        className={classNames(
                            styles.listItem,
                            state.genre === item.id && styles.active
                        )}
                        key={item.id}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <button className={styles.menuButton}>Apply</button>
        </div>
    );
};
