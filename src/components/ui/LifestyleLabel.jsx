import { Tag, TagLeftIcon } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

export const LifestyleLabel = (label) => {
  return (
    <Tag
      size="sm"
      bg={"green.100"}
      color="green.600"
      textTransform={"uppercase"}
      fontSize={10}
    >
      <TagLeftIcon as={FaLeaf} />
      {label.label}
    </Tag>
  );
};
