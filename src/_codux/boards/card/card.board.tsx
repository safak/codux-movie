import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                poster_path: '/22z44LPkMyf5nyyXvv8qQLsbom.jpg',
                id: 23,
                overview: 'Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first part of a two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book',
                vote_average: 9.0,
                title: 'Dune',
                release_date:"1999"
            }}
        />
    ),
    environmentProps: {
        canvasWidth: 249,
        canvasHeight: 413,
    },
});
