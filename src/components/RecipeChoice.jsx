import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { CautionLabels } from "./CautionLabels";
import { DietLabels } from "./DietLabels";
import { HealthLabels } from "./HealthLabels";
import { IngredientsList } from "./IngredientsList";
import { LifestyleLabels } from "./LifestyleLabels";
import { NutriLabels } from "./NutriLabels";
import { DivideLine } from "./ui/DivideLine";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex
      bg="white"
      minH="100vh"
      w={{ base: "100vw", lg: "900px" }}
      flexWrap="wrap"
      flexDir="column"
      align={{ base: "center", md: "normal" }}
    >
      <Flex w="100%" h="60px" align="center" p={3} gap={4}>
        {/*Return button */}
        <Box>
          <IconButton
            variant={"ghost"}
            color="yellow.500"
            icon={<ArrowLeftIcon />}
            _hover={{ bg: "yellow.500", color: "white" }}
            _active={{ bg: "yellow.300" }}
            onClick={() => onClick()}
          />
        </Box>
        <Flex right={8} w="100%" align={"center"} justify="center">
          <Icon
            w={12}
            h={12}
            marginRight={14}
            color="green.500"
            as={FaInfoCircle}
          />
        </Flex>
      </Flex>

      <Image
        objectFit="cover"
        h={200}
        w="100%"
        src={recipe.image}
        alt={`Image of ${recipe.label}`}
      />

      <Flex flexDir={{ base: "column", md: "row" }}>
        <Flex
          w={{ base: "100%", md: "50%" }}
          h="100%"
          align={{ base: "center", md: "normal" }}
          p={4}
          pb={{ base: 0, md: 4 }}
          flexDir="column"
        >
          <Heading as="h4" size="md" color="yellow.500">
            {recipe.label}
          </Heading>

          <Text
            color="GrayText"
            fontSize="xs"
            textTransform="uppercase"
            fontWeight={700}
            mb={1}
          >
            {recipe.mealType} - {recipe.dishType}
          </Text>

          <Text color="GrayText" fontSize={13} fontWeight="500">
            Servings: {recipe.yield}
          </Text>

          <Text color="GrayText" fontSize={13} fontWeight="500" mb={1}>
            Cooking time: {recipe.totalTime} minutes
          </Text>

          <LifestyleLabels recipe={recipe} mb={4} />

          <DivideLine />

          <IngredientsList recipe={recipe} flexDir="column" mb={4} />
          <DivideLine />
        </Flex>

        <Flex
          w={{ base: "100%", md: "50%" }}
          h="100%"
          align={{ base: "center", md: "normal" }}
          flexDir="column"
          p={4}
          pt={{ base: 0, md: 4 }}
        >
          <HealthLabels
            recipe={recipe}
            flexWrap="wrap"
            mb={4}
            justify={{ base: "center", md: "normal" }}
          />

          <DivideLine />

          {recipe.dietLabels.length > 0 ? (
            <>
              <DietLabels
                recipe={recipe}
                flexWrap="wrap"
                justify={{ base: "center", md: "normal" }}
                mb={4}
              />

              <DivideLine />
            </>
          ) : null}

          {recipe.cautions.length > 0 ? (
            <>
              <CautionLabels
                recipe={recipe}
                flexWrap="wrap"
                justify={{ base: "center", md: "normal" }}
                mb={4}
              />

              <DivideLine />
            </>
          ) : null}

          <NutriLabels
            recipe={recipe}
            flexWrap="wrap"
            justify={{ base: "center", md: "normal" }}
            mb={4}
          />
          <DivideLine />
        </Flex>
      </Flex>
    </Flex>
  );
};
