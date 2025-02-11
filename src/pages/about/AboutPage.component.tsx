import { WithRouterProps } from "@/hocs/withRouter";
import { Bind } from "@/hocs/withContainer/withContainerAboutSlice";
import SectionCard from "@/components/SectionCard/SectionCardComponent";
import SectionCardRow from "@/components/SectionCardRow/SectionCardRowComponent";
import StyledMarkdown from "@/components/StyledMarkdown/StyledMarkdownComponent";

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { occurrence, status } = state;

    return <SectionCard
        header={{ title: "About" }}
        status={status}
        isEmpty={occurrence === undefined}
        body={{
            style: { width: "100%" },
            content: <SectionCardRow value={<StyledMarkdown content={occurrence!} />} />
        }}
    />
}

export default Component;