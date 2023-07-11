import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetcherUnsplash from '../api/fetcher';

function Album() {
	const [[album, photos], setData] = useState([]);
	const { id } = useParams();

	useEffect(
		function () {
			Promise.all([
				fetcherUnsplash(`/collections/${id}`),
				fetcherUnsplash(`/collections/${id}/photos`),
			]).then((data) => {
				setData(data);
			});
		},
		[id]
	);

	return (
		<section>
			<h2>
				<small>Album :: </small>
				{album?.title}
			</h2>

			<div className={'collections'}>
				{photos?.map?.((item) => (
					<article key={item.id} style={{ '--bg-color': item.color }}>
						<img
							src={item?.urls?.small}
							width={200}
							alt={item?.alt_description || ''}
						/>
						<h3>
							<Link to={`/photo/${item.id}/${item.slug}`}>{item.id}</Link>
						</h3>
					</article>
				))}
			</div>
		</section>
	);
}

export default Album;
