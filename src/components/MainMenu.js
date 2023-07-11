// import { Link } from 'react-router-dom';

// function MainMenu() {
// 	return (
// 		<>
// 			<nav id='mainmenu'>
// 				<ul>
// 					<li>
// 						<Link to='/'>Start</Link>
// 					</li>
// 					<li>
// 						<Link to='/search'>Search</Link>
// 					</li>
// 					<li>
// 						<Link to='/aboutme'>About Me</Link>
// 					</li>
// 				</ul>
// 			</nav>
// 		</>
// 	);
// }

// export default MainMenu;

import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainMenu() {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};
	const handleLinkClick = () => {
		setShowNavbar(false);
	};
	return (
		<>
			<nav id='mainmenu'>
				<div className='menu-icon' onClick={handleShowNavbar}>
					&#9776;
				</div>
				<div className={`nav-elements  ${showNavbar && 'active'}`}>
					<ul>
						<li>
							<Link to='/' onClick={handleLinkClick}>
								{' '}
								Start
							</Link>
						</li>
						<li>
							<Link to='/search' onClick={handleLinkClick}>
								Search
							</Link>
						</li>
						<li>
							<Link to='/aboutme' onClick={handleShowNavbar}>
								About Me
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default MainMenu;
