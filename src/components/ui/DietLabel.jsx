import { Tag } from "@chakra-ui/react";

export const DietLabel = () => {
  return (
    <Tag
      color={"blue.600"}
      size={"sm"}
      bg={"blue.100"}
      textTransform="uppercase"
      fontSize={10}
    >
      low-sodium
    </Tag>
  );
};