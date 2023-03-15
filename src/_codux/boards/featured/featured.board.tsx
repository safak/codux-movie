import { createBoard } from '@wixc3/react-board';
import { Featured } from '../../../components/featured/featured';

export default createBoard({
    name: 'Featured',
    Board: () => <Featured />,
    environmentProps: {
        windowHeight: 667,
        canvasHeight: 2125,
        windowWidth: 375,
    },
});
