import './Navbar.css';



const Navbar = () => {
    return (
        <div className="main">
            <div className="Navbar">
                <h1>VT.</h1>
                <ul className="nav-list">
                    <li className="nav-item"><a href='#home'>Home</a></li>
                    <li className="nav-item"><a href='#about'>About</a></li>
                    <li className="nav-item"><a href='#contact'>Contact</a></li>
                    <li className="nav-item"><a href='#projects'>Projects</a></li>
                </ul>
                <button className="btn"><a href='#resume' download={'VivekThakurResume.pdf'}>Download CV</a></button>
            </div>
            <div className="menu">
                <div className="hamburger-menu">
                    <div className="bar-item"><a href='#home'>Home</a></div>
                    <div className="bar-item"><a href='#about'>About</a></div>
                    <div className="bar-item"><a href='#contact'>Contact</a></div>
                    <div className="bar-item"><a href='#projects'>Projects</a></div>
                    <div className="bar-item"><a href='#resume' download={'VivekThakurResume.pdf'}>Download CV</a></div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;