import { WarningTwoIcon } from "@chakra-ui/icons";
import { Tag, TagLeftIcon, Tooltip } from "@chakra-ui/react";

//Generates a caution-tag for the parsed label

export const CautionLabel = ({ label }) => {
  return (
    <Tooltip
      label={`CAUTION: This recipe contains \"${label}\" and may cause an allergic reaction`}
    >
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
    </Tooltip>
  );
};
