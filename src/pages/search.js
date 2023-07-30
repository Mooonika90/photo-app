import fetcherUnsplash from '../api/fetcher';
import useSWR from 'swr';
import { useState } from 'react';

function SearchPhotos() {
	const [search, setSearch] = useState('search');

	const pathname = `/search/photos?page=1&query=${search}`;
	const { data: { results } = {} } = useSWR(pathname, fetcherUnsplash);
	const onSubmit = (e) => {
		e.preventDefault();
		setSearch(search);
	};

	return (
		<section className='searchCollection'>
			<h2>What are you looking for?</h2>
			<form action='#' onSubmit={onSubmit}>
				<label aria-label='Enter text'>
					<input
						name='search'
						type='search'
						placeholder='search...'
						autoComplete='off'
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</label>
			</form>

			<div className={'collections'}>
				{results?.length > 0 ? (
					results.map((item) => (
						<article key={`Results-${item.id}`}>
							<img src={item?.urls?.regular} alt='' width={200} />
							<h3>{item?.tags[1]?.title || 'No title'}</h3>
						</article>
					))
				) : (
					<p className='error'>
						Oops, it seems the data went on a vacation to Bermuda without
						leaving a forwarding address. We'll have to wait for its postcard to
						arrive!
					</p>
				)}
			</div>
		</section>
	);
}

export default SearchPhotos;
