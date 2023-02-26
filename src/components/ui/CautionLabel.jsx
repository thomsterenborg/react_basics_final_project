import { WarningTwoIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon } from "@chakra-ui/react";

export const CautionLabel = () => {
  return (
    <Tag
      size="sm"
      bg="red.100"
      textTransform="uppercase"
      color="red.600"
      fontSize={10}
    >
      <TagLeftIcon as={WarningTwoIcon}></TagLeftIcon>
      nuts
    </Tag>
  );
};
