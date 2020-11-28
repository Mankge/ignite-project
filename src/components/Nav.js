//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="ignite" />
        <h1>Ignite</h1>
      </Logo>
      <Search className="search">
        <input type="text" />
        <button>Search</button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 3rem;
  text-align: center;
`;
const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Search = styled(motion.div)`
  input {
    display: inline-block;
    width: 30%;
    font-size: 1.3rem;
    padding: 10px 15px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    display: inline-block;
    font-size: 1.3rem;
    border: none;
    outline: none;
    padding: 10px 15px;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

export default Nav;
