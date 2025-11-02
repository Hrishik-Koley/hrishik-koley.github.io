import Typewriter from './Typewriter';

const NavBar = () => {
    const logoText = "My Logo";

    return (
        <nav className="navbar">
            <div className="logo">
                <Typewriter text={logoText} delay={150} />
            </div>
            {/* ...existing code... */}
        </nav>
    );
};

export default NavBar;