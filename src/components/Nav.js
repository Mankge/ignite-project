import { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearch}>
        <img src={logo} alt="ignite" />
        <h1>Ignite</h1>
      </Logo>
      <Search className="search">
        <input type="text" onChange={inputHandler} value={textInput} />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
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

const Search = styled(motion.form)`
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
