import { useRouteError, Link } from "react-router-dom";
import "../styles/ErrorPage.css";
import Header from "../components/Header.jsx";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    
    return (
        <>
        <Header />
        <section id="error-page" className="error-page">
            <div>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
        </>
    );
}