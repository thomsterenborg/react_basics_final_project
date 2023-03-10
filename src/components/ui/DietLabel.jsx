import { Tag } from "@chakra-ui/react";

//Generates a diet-tag for the parsed label

export const DietLabel = ({ label }) => {
  return (
    <Tag
      color={"blue.600"}
      size={"sm"}
      bg={"blue.100"}
      textTransform="uppercase"
      fontSize={10}
    >
      {label}
    </Tag>
  );
};
