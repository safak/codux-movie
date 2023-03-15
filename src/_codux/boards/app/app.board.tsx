import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#111111',
        canvasWidth: 1176,
        canvasHeight: 655,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
