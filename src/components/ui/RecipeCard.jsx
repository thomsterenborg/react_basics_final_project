import {
  Card,
  CardBody,
  CardHeader,
  Fade,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { LifestyleLabels } from "../LifestyleLabels";
import { DietLabels } from "../DietLabels";
import { CautionLabels } from "../CautionLabels";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Fade in>
      <Card
        direction="column"
        bg="white"
        w="300px"
        h="450px"
        boxShadow="xl"
        borderRadius={15}
        overflow="hidden"
        align="center"
        mb={4}
        mx={1}
        _hover={{
          transform: "scale(1.1)",
          boxShadow: "2xl",
          cursor: "pointer",
        }}
        onClick={() => onClick(recipe)}
      >
        <Image
          objectFit="cover"
          w="100%"
          h={40}
          src={recipe.image}
          alt={`Image of ${recipe.label}`}
        />

        <CardHeader align="center" pb={0}>
          <Text
            color="GrayText"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight={700}
            mb={2}
          >
            {recipe.mealType} - {recipe.dishType}
          </Text>
          <Heading as="h4" size="md">
            {recipe.label}
          </Heading>

          <LifestyleLabels
            recipe={recipe}
            justify="center"
            flexWrap="wrap"
            mt={2}
          />
        </CardHeader>

        <CardBody pt={2}>
          <Flex gap={1} align={"center"} direction="column">
            {/*Diet and Caution label are only generate if there are labels in the array*/}
            {recipe.dietLabels.length > 0 ? (
              <DietLabels
                recipe={recipe}
                justify="center"
                flexWrap="wrap"
                mb={2}
              />
            ) : null}

            {recipe.cautions.length > 0 ? (
              <CautionLabels recipe={recipe} justify="center" flexWrap="wrap" />
            ) : null}
          </Flex>
        </CardBody>
      </Card>
    </Fade>
  );
};
