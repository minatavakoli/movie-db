import { Box, Image, Input, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../utils";
import { Container } from "./style";
import { MovieListResponse } from "./types";

const MovieList = () => {
  const [inputValue, setInputValue] = useState("");
  const searchQuery = useDebounce(inputValue, 1000) || "batman";
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ["movieList", searchQuery],
    () => {
      return axios
        .get<MovieListResponse>(
          `https://www.omdbapi.com/?apikey=c24c2c7d&s=${searchQuery}`
        )
        .then((response) => {
          return response.data;
        });
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Box p="4rem">
      <Text fontWeight="bold" fontSize="3xl">
        Search Movies
      </Text>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        bg="#fff"
        w="400px"
        mt="16px"
      />
      <SimpleGrid
        mt="20px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >


        {isLoading ? (
          <Spinner />
        ) : (
          data?.Search?.map((item) => {
            return (
              <Container
                key={item.Title}
                onClick={() => {
                  navigate(`/movies/${item.imdbID}`);
                }}
              >
                <Image
                  borderRadius="5px"
                  src={item.Poster}
                  w="100%"
                  height="100%"
                />
                <Box className="description">
                  <Text fontSize="lg">{item.Title}</Text>
                  <Text fontSize="lg">{item.Year}</Text>
                </Box>
              </Container>
            );
          })
        )}
      </SimpleGrid>
    </Box>
  );
};

export default MovieList;
