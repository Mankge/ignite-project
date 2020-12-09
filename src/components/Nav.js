import { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { fadeIn } from "../animations";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { searched } = useSelector((state) => state.games);
  let token;
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    let searchTerm = e.target.value;
    setTextInput(searchTerm);
    dispatch(fetchSearch(searchTerm, token));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value;
    dispatch(fetchSearch(searchTerm));
    setTextInput("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="ignite" />
        <h1>Ignite</h1>
      </Logo>
      <Wrapper className="wrapper">
        <Search autoComplete="off" className="search">
          <input
            id="searchInput"
            placeholder="Type to Search"
            type="text"
            onChange={inputHandler}
            value={textInput}
          />
          <div
            className={`autocomplete-box ${searched.length ? "active" : ""}`}
          >
            {/* List of suggestions inserted from javascript */}
            {searched.length ? (
              <div className="suggestions">
                {searched.map((game) => (
                  <li onClick={() => setTextInput(game.name)} key={game.id}>
                    {game.name}
                  </li>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="icon" onClick={submitSearch} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </Search>
      </Wrapper>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 3rem;
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

const Wrapper = styled(motion.div)`
  max-width: 450px;
  margin: 20px auto;
`;

const Search = styled(motion.form)`
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  input {
    display: inline-block;
    width: 100%;
    height: 55px;
    font-size: 1.3rem;
    padding: 10px 15px;
    border: none;
    outline: none;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  }
  .autocomplete-box {
    padding: 0px;
    max-height: 280px;
    overflow-y: hidden;
    opacity: 0;
    pointer-events: none;
  }
  .active {
    padding: 10px 8px;
    opacity: 1;
    pointer-events: auto;
  }

  .autocomplete-box li {
    list-style: none;
    padding: 8px 12px;
    width: 100%;
    cursor: pointer;
    border-radius: 3px;
  }

  .autocomplete-box li:hover {
    background: #efefef;
  }

  .icon {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 55px;
    width: 55px;
    text-align: center;
    line-height: 55px;
    font-size: 20px;
    color: #ff7676;
    cursor: pointer;
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
