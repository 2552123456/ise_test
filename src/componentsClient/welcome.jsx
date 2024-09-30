import React from "react";
import backgroundImage from '../assets/images/background-14.jpg';
import logo from '../assets/images/logo.jpeg';
function Welcome() {
    return (

        <div className="d-flex flex-column min-vh-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
            <header className="text-center my-3">
                <div className="d-flex justify-content-between align-items-center border border-light p-2 bg-dark bg-opacity-75 rounded">
                    <div><img src={logo} alt="Test easily" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /></div>
                    <div>
                        <button className="btn btn-primary me-2">Sign Up</button>
                        <button className="btn btn-secondary">Login</button>
                    </div>
                </div>
            </header>

            <div className="text-center my-5">
                <h3 className="bg-dark bg-opacity-75 p-2 rounded">Description</h3>
                <p className="bg-dark bg-opacity-75 p-2 rounded">Team 1 the best in the world, if you don't think so, you are made of stupidity.</p>
            </div>

            <div className="text-center my-5 mt-auto mb-5">
                <div style={{ border: '1px solid white', padding: '1rem', display: 'inline-block', margin: '0.5rem', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>Elon Musk</div>
                <div style={{ border: '1px solid white', padding: '1rem', display: 'inline-block', margin: '0.5rem', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>Jeff Bezos</div>
                <div style={{ border: '1px solid white', padding: '1rem', display: 'inline-block', margin: '0.5rem', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>Mark Zuckerberg</div>
            </div>

            <div style={{ height: '100px' }}></div> { }

            <footer className="text-center border border-light p-3 w-100 bg-dark bg-opacity-75" style={{ position: 'fixed', bottom: 0 }}>
                Some text and links to social media
            </footer>
        </div>

    );
}
export default Welcome;