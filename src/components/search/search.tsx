import styles from './search.module.scss';
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(SearchContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'ADD_QUERY', payload: input });
    };
    return (
        <form className={classNames(styles.root, className)} onSubmit={handleSubmit}>
            <input
                className={styles.inputcls}
                placeholder="Search..."
                onChange={(e) => {
                    setInput(e.currentTarget.value);
                }}
            />
            <button className={styles.btncls} type="submit">
                Search
            </button>
        </form>
    );
};
