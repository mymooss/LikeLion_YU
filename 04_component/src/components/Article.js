const Article = ({title, body}) =>{ //타이틀과 바디 받아오기
    return (
        <article> 
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    );
};

export default Article;