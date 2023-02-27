import { Tag, TagLeftIcon } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";
// FaLeaf icon by FontAwesome: https://react-icons.github.io/react-icons/icons?name=fa

//Generates a Lifestyle-tag for the parsed label

export const LifestyleLabel = ({ label }) => {
  return (
    <Tag
      size="sm"
      bg={"green.100"}
      color="green.600"
      textTransform={"uppercase"}
      fontSize={10}
    >
      <TagLeftIcon as={FaLeaf} />
      {label}
    </Tag>
  );
};
