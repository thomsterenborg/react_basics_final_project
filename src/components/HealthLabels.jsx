import { Flex, Text } from "@chakra-ui/react";
import { HealthLabel } from "./ui/HealthLabel";

export const HealthLabels = ({ recipe, ...props }) => {
  //Generetes and shows tag for every health-label in the recipe
  //filter out the Vegetarian and Vegan label, because we use them as LifestyleLabels
  const healthLabels = recipe.healthLabels.filter(
    (label) => label != "Vegetarian" && label != "Vegan"
  );

  return (
    <>
      {healthLabels.length > 0 ? <Text fontWeight={600}>Health</Text> : null}
      <Flex gap={2} {...props}>
        {healthLabels.map((label) => (
          <HealthLabel key={self.crypto.randomUUID()} label={label} />
        ))}
      </Flex>
    </>
  );
};
