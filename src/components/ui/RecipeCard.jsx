import { AddIcon } from "@chakra-ui/icons";
import { FaLeaf } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { LifestyleLabels } from "../LifestyleLabels";
import { DietLabels } from "../DietLabels";
import { CautionLabels } from "../CautionLabels";

export const RecipeCard = () => {
  return (
    <Card
      direction="column"
      bg="white"
      maxW="xs"
      boxShadow="2xl"
      borderRadius={15}
      overflow="hidden"
      align="center"
      mb={4}
      mx={2}
    >
      <Image
        objectFit="cover"
        maxW="100%"
        src="/src/assets/recipe-images/baked-chicken-parm.jpeg"
      />
      <CardHeader align="center" pb={0}>
        <Text
          color="GrayText"
          fontSize="xs"
          textTransform="uppercase"
          fontWeight={700}
        >
          lunch/dinner - Alcohol cocktail
        </Text>
        <Heading as="h4" size="md">
          Title of the recipe but than a bit longer so it gets to an onther row
        </Heading>
      </CardHeader>
      <CardBody>
        <Flex gap={1} align={"center"} direction="column">
          <LifestyleLabels />
          <DietLabels />
          <Text pt={2}>Caution</Text>
          <CautionLabels />
        </Flex>
      </CardBody>
    </Card>
  );
};
