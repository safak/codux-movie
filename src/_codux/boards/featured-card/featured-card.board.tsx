import { createBoard } from '@wixc3/react-board';
import { FeaturedCard } from '../../../components/featured-card/featured-card';

export default createBoard({
    name: 'FeaturedCard',
    Board: () => (
        <FeaturedCard
            movie={{
                id: 13,
                title: 'Dune',
                overview:
                    'Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first part of a two-part adaptation of the 1965 novel by Frank Herbert, primarily covering the first half of the book.',
                release_date: '1999',
                poster_path: '/22z44LPkMyf5nyyXvv8qQLsbom.jpg',
                vote_average: 7,
            }}
        />
    ),
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    },
});
