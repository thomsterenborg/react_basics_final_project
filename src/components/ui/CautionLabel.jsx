import { WarningTwoIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon } from "@chakra-ui/react";

//Generates a caution-tag for the parsed label

export const CautionLabel = ({ label }) => {
  return (
    <Tag
      size="sm"
      bg="red.100"
      textTransform="uppercase"
      color="red.600"
      fontSize={10}
    >
      <TagLeftIcon as={WarningTwoIcon}></TagLeftIcon>
      {label}
    </Tag>
  );
};
