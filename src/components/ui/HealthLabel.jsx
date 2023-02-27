import { Tag } from "@chakra-ui/react";

//Generates a health-tag for the parsed label

export const HealthLabel = ({ label }) => {
  return (
    <Tag
      size="sm"
      bg={"teal.100"}
      color="teal.600"
      textTransform={"uppercase"}
      fontSize={10}
    >
      {label}
    </Tag>
  );
};
