import { useParams, Link } from 'react-router-dom';

import fetcherUnsplash from '../api/fetcher';
import useSWR from 'swr';

function Photo() {
	const { id, slug } = useParams();

	const { data } = useSWR(`/photos/${slug}`, fetcherUnsplash);

	// console.log('DATA :: ', data);

	return (
		<div className='photo'>
			<section>
				<div>
					<h2>Photo {id}</h2>
					<p>{data?.alt_description}</p>
					<small>
						Crated by: <span>{data?.user?.name}</span>
					</small>
				</div>
				<img src={data?.urls?.regular} alt={''} />
			</section>
			<Link to={`/`}>
				<span aria-hidden='true'>← </span>back
			</Link>
		</div>
	);
}

export default Photo;

// import { useParams } from 'react-router-dom';
// import useSWR from 'swr';
// import fetcherUnsplash from '../api/fetcher';
// import { Link } from 'react-router-dom';

// function SinglePhotoPage() {
// 	const { id } = useParams();

// 	const { data: photo } = useSWR(`/collections/${id}`, fetcherUnsplash);
// 	console.log(photo);

// 	return (
// 		<div className='photo'>
// 			{photo ? (
// 				<article>
// 					<div>
// 						<h2>{photo.title}</h2>
// 						<p>{photo.cover_photo.alt_description}</p>
// 						<small>
// 							Crated by: <span>{photo.cover_photo.user.username}</span>
// 						</small>
// 					</div>
// 					<img src={photo.cover_photo.urls.small} alt='' width={200} />
// 				</article>
// 			) : (
// 				<p>Loading...</p>
// 			)}

// 			<Link to={`/`}>
// 				<span aria-hidden='true'>← </span>back
// 			</Link>
// 		</div>
// 	);
// }

// export default SinglePhotoPage;
