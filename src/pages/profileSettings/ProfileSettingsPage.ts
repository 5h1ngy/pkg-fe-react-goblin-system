import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerProfileSlice";

import ProfilePage from "./ProfileSettingsPage.component";

export default withContainer(withRouter(ProfilePage));