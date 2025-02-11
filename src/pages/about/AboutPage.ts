import withRouter from "@/hocs/withRouter";
import { withContainer } from "@/hocs/withContainer/withContainerAboutSlice";

import AboutPage from "./AboutPage.component";

export default withContainer(withRouter(AboutPage));