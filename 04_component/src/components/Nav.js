const Nav = ({ topics, onChangeMode}) => {
    return (
        <nav>
            <ul>
                {topics.map((topic)=>(
                    <li key={topic.id} onClick = {() => onChangeMode(topic.id)}>
                        {topic.title}
                    </li>

                ))}

            </ul>
        </nav>
    );
};

export default Nav;