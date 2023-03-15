import { createBoard } from '@wixc3/react-board';
import { Container } from '../../../components/container/container';

export default createBoard({
    name: 'Container',
    Board: () => <Container />
});
