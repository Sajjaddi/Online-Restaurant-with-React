import CartOrderBox from "./CartOrderBox";
import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <Title title={"Online Restaurant with React"} />
      <CartOrderBox onShowCart={props.onShowCart}/>
    </header>
  );
};

export default Header;
