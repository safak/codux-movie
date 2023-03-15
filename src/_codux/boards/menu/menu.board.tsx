import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    environmentProps: {
        windowWidth: 300,
        canvasWidth: 302,
        canvasHeight: 130,
    },
});
