import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerAuthSlice";

import LoginPage from "./LoginPage.component";

export default withContainer(withRouter(LoginPage));