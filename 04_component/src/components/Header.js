const Header = (props) => {
    return (
      <header>
        <h1>
          <a href="/" 
             onClick={(e) => {
              e.preventDefault(); // a 태그의 기본 기능을 막는다, 새로고침 방지
              props.onChangeMode();
          }}>{props.title}</a>
        </h1>
      </header>
    );
}

export default Header;