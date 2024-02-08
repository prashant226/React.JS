import FoodFireLogo from "./OIP.jpg";

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li> Home </li> <li> About </li> <li> Contact </li>{" "}
          <li>
            <button className="login">Login</button>
            <i class="fa-solid fa-cart-shopping"> </i>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="./Food Fire Logo" />
  </a>
);
export default Header;
