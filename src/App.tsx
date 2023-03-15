import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Featured } from './components/featured/featured';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
                <Menu />
                <FavoriteContextProvider>
                    <Container />
                    <Featured />
                </FavoriteContextProvider>
            </SearchContextProvider>
        </div>
    );
}

export default App;
