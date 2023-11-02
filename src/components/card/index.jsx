import "./index.css"

const Card = ({title, content}) => {
    return (
        <article className="card">
            <img src="src/assets/giphy.gif" alt="imagem do card" />
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <a className="link" href="www.github.com">Acessar GitHub</a>
        </article>
    );
};

export default Card;