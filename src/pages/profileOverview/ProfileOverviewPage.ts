import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerProfileSlice";

import ProfilePage from "./ProfileOverviewPage.component";

export default withContainer(withRouter(ProfilePage));