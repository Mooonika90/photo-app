import MainMenu from './MainMenu';

function Header(props) {
	const { children, color, ...rest } = props;
	return (
		<>
			<header {...rest}>{children}</header>
			<MainMenu />
		</>
	);
}

export default Header;
