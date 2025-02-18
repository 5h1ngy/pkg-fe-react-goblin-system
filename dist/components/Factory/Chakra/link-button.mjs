import { createRecipeContext } from "@chakra-ui/react";
const { withContext } = createRecipeContext({ key: "button" });
const LinkButton = withContext("a");
export {
  LinkButton
};
