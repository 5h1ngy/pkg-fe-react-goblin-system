import { useFooter } from "./shared/hooks";
import withContext from "./shared/Provider";
import Transformer from "./Transformer";
import { ComponentProps } from "./transformer.types"

export default withContext(Transformer)
export type { ComponentProps }
export { useFooter }