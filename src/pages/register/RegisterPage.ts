import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerAuthSlice";

import RegisterPage from "./RegisterPage.component";

export default withContainer(withRouter(RegisterPage));