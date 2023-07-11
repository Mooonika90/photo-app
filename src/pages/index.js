import fetcherUnsplash from '../api/fetcher';
import useSWR from 'swr';

import { Link } from 'react-router-dom';

const pathname = '/collections?page=8';

function HomePage() {
	const { data: albums } = useSWR(pathname, fetcherUnsplash);

	return (
		<section>
			<h2>Albumy</h2>
			<div className={'collections'}>
				{albums?.map?.((item) => (
					<article key={`Albums-${item.id}`}>
						<img src={item?.cover_photo?.urls?.regular} width={200} alt='' />
						<h3>
							<Link to={`/album/${item?.id}`}>{item?.title}</Link>
						</h3>
					</article>
				))}
			</div>
		</section>
	);
}

export default HomePage;
