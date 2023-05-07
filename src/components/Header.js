const Title = () => (
    <a href="/">
      <img
        alt="Food Villa"
        className="logo"
        src="https://th.bing.com/th/id/OIP._b6q0KzTrD7VrwPuS-gojgAAAA?pid=ImgDet&rs=1"
      />
    </a>
  );
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;