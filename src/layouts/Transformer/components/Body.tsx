import { FC, useRef, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import gsap from "gsap";

import { usePageContext } from "../shared/hooks";
import { ComponentProps } from "../transformer.types";

const Body: FC<ComponentProps> = () => {
    const { props } = usePageContext();
    const { children } = props;

    // 1. Creiamo un ref per il Flex
    const flexRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 2. Avviamo l’animazione GSAP al montaggio
        if (flexRef.current) {
            gsap.fromTo(
                flexRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "bounce.out", }
            );
        }
    }, []);

    return (
        <Flex ref={flexRef} zIndex="3"
            minHeight="100vh"
            flexDir="column"
            borderYWidth="1px"
            paddingTop="8rem"
            paddingBottom="8rem"
            paddingX={{ base: "5%", sm: "5%", md: "5%", lg: "5%", xl: "10%", "2xl": "10%" }}
            gap="8rem"
            justifyContent="center"
        >
            {children}
        </Flex>
    );
};

export default Body;
