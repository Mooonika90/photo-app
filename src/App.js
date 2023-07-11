import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/index';
import Album from './pages/album';
import SinglePagePhoto from './pages/photo';
import SearchPhotos from './pages/search';
import Aboutme from './pages/aboutme';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div id='app'>
			<Header id='site-header'>
				<h1>CODE:ME - FD</h1>
			</Header>
			<main>
				<Routes>
					<Route path={'/aboutme'} element={<Aboutme />} />
					<Route path={'/photo/:id/:slug'} element={<SinglePagePhoto />} />
					<Route path={'/search'} element={<SearchPhotos />} />
					<Route path={'/album/:id'} element={<Album />} />
					<Route path={'/'} element={<HomePage />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}

export default App;
