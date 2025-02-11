import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerUsersSlice";

import UsersPage from "./UsersOverviewPage.component";

export default withContainer(withRouter(UsersPage));