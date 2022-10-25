import './style.css';

function SinglePriceGrid(){
    return (
        <div id="main">
            <section id="text1">
                <h2 id="title1">Join our community</h2>
                <h4>30-day, hassle-free money back guarantee</h4>
                <p id="p2">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
            </section>
            <div id="container2">
                <section id="text2">
                    <h2>Monthly Subscription</h2>
                    <p> <strong>$29</strong> per month</p>
                    <p>Full access for less than $1 a day</p>
                    <button><b>Sign Up</b></button>
                </section>
                <section id="text3">
                    <h2>Why Us</h2>
                    <p className="p3">Tutorials by industry experts</p>
                    <p className="p3">Peer & expert code review</p>
                    <p className="p3">Coding exercises</p>
                    <p className="p3">Access to our GitHub repos</p>
                    <p className="p3">Community forum</p>
                    <p className="p3">Flashcard decks</p>
                    <p className="p3">New videos every week</p>
                </section>
            </div>
        </div> 
    )
}

export default SinglePriceGrid;