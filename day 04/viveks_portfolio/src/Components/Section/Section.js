import './Section.css';

const Section = () => {
    return (
        <div className='home-section'>
            <div className='home_content_1'>
                <div className='home-text'>
                    <h1>Hi There! 👋🏻</h1>
                    <h1>I am <span className='colored-text'>Vivek Thakur</span></h1>
                    <p>An Undergrad <span className='colored-text'>Data Scientist</span></p>
                </div>
            </div>
            <div className='home-content-2'>
            </div>
        </div>
    );
};

export default Section;