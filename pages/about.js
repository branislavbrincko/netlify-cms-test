import Link from "next/link";
import { attributes } from "../content/about.md";

const About = () => {
    const { title, text } = attributes;

    return (
        <div>
            <Link href="/">home</Link>
            <h2>{title}</h2>
            <div>{text}</div>
        </div>
    );
};

export default About;
