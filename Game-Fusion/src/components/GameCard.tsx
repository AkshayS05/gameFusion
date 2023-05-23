import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import MetaCritic from "./MetaCritic";

// game object as an props to this component
interface Props{
  game: Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
      <HStack justifyContent={'space-between'} marginBottom={3}>
      <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
      <MetaCritic score={game.metacritic}/>
      </HStack>
      <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
      </Card>
  );
};

export default GameCard;