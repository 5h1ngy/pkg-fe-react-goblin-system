import { FC } from "react";
import { Flex, chakra } from "@chakra-ui/react";

import { usePageContext } from "./TransformerLayout.Provider";
import { useMouse } from "./TransformerLayout.hooks";
import Header from "./TransformerLayout.component.Header";
import Body from "./TransformerLayout.component.Body";

const Component: FC = () => {
    const { isMobileRef, circleRef } = useMouse()
    const { props, } = usePageContext()
    const { background } = props;

    return <Flex position="relative" overflow="hidden"
        direction={"column"} width={"100%"} minHeight={'100vh'}
    >
        {/* Sfondo sfocato */}
        {background && <chakra.div
            position={"absolute"} zIndex={1}
            top={0} left={0} right={0} bottom={0}
            backgroundAttachment="fixed"
            backgroundPosition="top"
            backgroundSize="cover"
            filter={background.opacity ? `blur(${background.opacity}px)` : undefined}
            backgroundColor={"gray.100"}
            backgroundImage={background.image ? `url(${import.meta.env.VITE_BASENAME}/assets/background_white.png)` : undefined}
            _dark={{
                backgroundColor: "gray.950",
                backgroundImage: background.imageDark ? `url(${import.meta.env.VITE_BASENAME}/assets/background_dark.png)` : undefined
            }}
        />}

        {/* Cerchio dietro il mouse */}
        {!isMobileRef && <chakra.div ref={circleRef} pointerEvents="none"
            position="fixed" zIndex={2}
            top={0} left={0}
            width="100px" height="100px"
            borderRadius="50%"
            background="radial-gradient(circle, {colors.gray.100} 0%, transparent 70%)"
            _dark={{
                background: "radial-gradient(circle, {colors.gray.950} 0%, transparent 70%)",
            }}
        />}

        {/* Contenuto */}
        <Flex position="relative" zIndex={3}
            direction={"column"} width={"100%"} minHeight={'100vh'}
        >
            <Header />
            <Body />
        </Flex>
    </Flex>;
}

export default Component;