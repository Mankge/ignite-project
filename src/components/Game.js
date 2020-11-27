import { motion } from "framer-motion";
import styled from "styled-components";
//redux
import { useDispatch } from "react-redux";
import { loadGameDetail } from "../actions/gameDetailAction";

import { Link } from "react-router-dom";

import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //load Details
  const dispatch = useDispatch();
  const gameDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadGameDetail(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={gameDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default Game;
