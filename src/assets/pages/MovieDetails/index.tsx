import { Box, Button, Flex, Image, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MovieDetailsResponse } from "./types";

const MovieDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ["movieDetails", id],
    () => {
      return axios
        .get<MovieDetailsResponse>(
          `https://www.omdbapi.com/?apikey=c24c2c7d&i=${id}`
        )
        .then((response) => {
          return response.data;
        });
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex gap="1rem" padding="2rem">
      <Box>
        <Image src={data?.Poster} />
      </Box>
      <Flex gap="1rem" flexDirection="column">
        <Box fontWeight="bold">{data?.Title}</Box>
        <Box>{data?.Language}</Box>
        <Box>{data?.Plot}</Box>
        <Box>{data?.Year}</Box>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          w="150px"
          colorScheme="blue"
        >
          Back to movies
        </Button>
      </Flex>
    </Flex>
  );
};

export default MovieDetails;
