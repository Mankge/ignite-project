// Animation and Styling
import { motion } from "framer-motion";
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();

  //Exit Deatil
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //data
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info className="info">
                <h3>Platforms</h3>
                <Platforms className="platforms">
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media className="media">
              <img src={game.background_image} alt={game.name} />
            </Media>
            <Description className="description">
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((screenshot) => (
                <img
                  src={screenshot.image}
                  key={screenshot.id}
                  alt="Game Screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 60%;
  /* border-radius: 1rem; */
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 20%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3 {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: conver;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
