import classes from "./Header.module.css";
import Nav from "../Nav/Nav";
import Card from "../../../UI/Card/Card";
import HeaderContent from "../Header-Content/HeaderContent";

const Header = () => {
  return (
    <Card className={classes.header}>
      <Nav />
      <HeaderContent />
    </Card>
  );
};

export default Header;
