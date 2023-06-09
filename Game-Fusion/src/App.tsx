import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';


export interface GameQuery {
  genre: Genre | null;
  platform : Platform | null;
  sortOrder: string;
  searchText: string;
};

function App() {
//set genre
// this can hold a variable of null or Genre type
// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
// //to filter games as per the platform
// const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);


//query object pattern-- to query the games
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="App">
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}
      >
        <GridItem area="nav"><NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/></GridItem>
        <Show above='lg'>
        <GridItem area="aside" paddingX={5}><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})}/></GridItem>
        </Show>

        {/* passing selected genre to the child in order to display selected genre only. */}
        
        <GridItem area="main" >
          <Box paddingLeft={2}> 
          <GameHeading gameQuery={gameQuery}/>
          <Flex  marginBottom={5}> 
            <Box marginRight={5}>
          <PlatformSelector selectedPlatform ={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery,platform})}/>
            </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} /></GridItem>
      </Grid>
      </div>
  )
}

export default App;
