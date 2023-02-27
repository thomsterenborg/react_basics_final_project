import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { CautionLabels } from "./CautionLabels";
import { DietLabels } from "./DietLabels";
import { LifestyleLabels } from "./LifestyleLabels";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex
      bg="white"
      minH="100vh"
      w={{ base: "100vw", lg: "900px" }}
      flexWrap="wrap"
      flexDir="column"
    >
      <Flex w="100%" h="60px" align="center" p={4} gap={4}>
        <IconButton
          variant={"ghost"}
          color="blue.500"
          icon={<ArrowLeftIcon />}
          _hover={{ bg: "blue.500", color: "white" }}
          _active={{ bg: "blue.300" }}
          onClick={() => onClick()}
        />
      </Flex>
      <Image objectFit="cover" h={200} w="100%" src={recipe.image} />
      <Flex>
        <Flex w="50%" h="100%" p={4} flexDir="column">
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
        </Flex>
        <Flex w="50%" h="100%" p={4}>
          <Flex gap={1} direction="column">
            <LifestyleLabels recipe={recipe} />

            {recipe.dietLabels.length > 0 ? (
              <DietLabels recipe={recipe} />
            ) : null}

            {recipe.cautions.length > 0 ? (
              <CautionLabels recipe={recipe} />
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
