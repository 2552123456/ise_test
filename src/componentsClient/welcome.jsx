import React from "react";

function Welcome() {
    return (
        <div className="container">
            <header className="border border-dark fixed-top-0 mb-3 text-center">
                <h1>Welcome</h1>
                <div className="border border-dark">
                    <div>
                        <div className="border border-dark w-25 position-absolute top-5 start-0">logo</div>
                    </div>
                    <div className="border border-dark w-25 position-absolute top-5 end-0">
                        <button>signUp</button>
                        <button>login</button>
                    </div>
                </div>
            </header>

            <div className="border border-dark fixed-top top-50 text-center">
                <h3>Description</h3>
                <p>Team 1 the best in the world, if you don't think so, you are made of stupidity.</p>
            </div>

            <div className="border border-dark fixed-bottom mb-3 text-center">
                <div>ealon mask</div>
                <div>jef besos</div>
                <div>marck tzukerberg</div>
            </div>
            <footer className="border border-dark fixed-bottom "> some shit and links to social media </footer>
        </div>
    );
}
export default Welcome;