import { FC } from "react";
import { Flex, HStack, chakra } from "@chakra-ui/react";

import { usePageContext, useHooks } from "./shared/hooks";
import Header from "./components/Header";
import Body from "./components/Body";
import { ComponentProps } from "./transformer.types";

const Transformer: FC<ComponentProps> = () => {
    const { props, footer, } = usePageContext()
    const { background, navigationScroll, } = props;
    const { isMobileRef, circleRef } = useHooks(navigationScroll)

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
            backgroundColor={"white"}
            backgroundImage={background.image ? `url(${background.image})` : undefined}
            _dark={{
                backgroundColor: "black",
                backgroundImage: background.imageDark ? `url(${background.imageDark})` : undefined
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

            {footer && <HStack
                borderBottomLeftRadius='10px' borderWidth="1px"
                backgroundColor="gray.100" _dark={{ backgroundColor: "gray.950" }} padding={"1.5rem"}
            >
                {footer}
            </HStack>}

        </Flex>
    </Flex>;
}

export default Transformer;