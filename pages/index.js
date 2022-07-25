import Head from "next/head";
import { attributes, react as HomeContent } from "../content/home.md";

const Home = () => {
    let { title, partners } = attributes;

    return (
        <>
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <HomeContent />
            <article>
                <h1>{title}</h1>
                <h4>Our partners</h4>
                <ul>
                    {partners.map((partner, k) => (
                        <li key={k}>
                            <h5>{partner.name}</h5>
                            <p>{partner.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default Home;
