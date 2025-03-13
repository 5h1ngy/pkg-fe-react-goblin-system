import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Flex, Spacer, Image, Text } from "@chakra-ui/react";
import { IconButton, Tabs } from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";

import { ColorModeButtonExtended } from "@/components/Factory/Chakra/color-mode";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger } from "@/components/Factory/Chakra/drawer";
import { DrawerContent, DrawerRoot, DrawerTrigger } from "@/components/Factory/Chakra/drawer";

import { usePageContext, useMouse } from "../shared/hooks";
import { findMatchingNavbarValue } from "../shared/utils";
import { ComponentProps } from "../transformer.types";

const Component: FC<ComponentProps> = () => {
    const { isMobileRef, handleNavigationAndScroll, } = useMouse()
    const { props, } = usePageContext()
    const { navigationScroll, logo, navbarItems, navbarSubItems } = props;

    const Logo: FC = () =>
        logo && <Image src={logo} width={'42px'} />;

    return <Flex wrap={"wrap"} position={"fixed"} zIndex={4} width={"100%"} top={0}
        backgroundColor="gray.100" _dark={{ backgroundColor: "gray.950" }}
    >
        {!isMobileRef

            ? <>

                <Flex
                    wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'5%'} paddingY={!navbarSubItems ? "1rem" : ''} paddingTop={navbarSubItems ? "1rem" : ''}
                    borderWidth="1px"
                >
                    <Logo />
                    {navbarItems?.map(item =>
                        <Text key={item.value}
                            onClick={() => handleNavigationAndScroll(item.value, navigationScroll)}
                            style={{ cursor: 'pointer' }}
                            textStyle="xl" fontWeight="medium">{item.icon} {item.label}</Text>
                    )}
                    <Spacer />
                    <ColorModeButtonExtended variant="enclosed" size={"sm"} />
                </Flex>

                {navbarSubItems && <Flex wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"start"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'10%'}
                >
                    <Tabs.Root key={crypto.randomUUID()}
                        defaultValue={
                            props.location
                                ? findMatchingNavbarValue(props.location.pathname, navbarItems, navbarSubItems)
                                : ""
                        }
                        variant={"line"}
                        size={"sm"}
                        onValueChange={(details: { value: string }) => { if (props.navigate) props.navigate(details.value) }}
                    >
                        <Tabs.List>
                            {navbarSubItems
                                .filter(subItem => subItem.group
                                    ? subItem.group?.includes(
                                        navbarItems?.find(item =>
                                            props.location?.pathname.search(new RegExp(item.value, 'g')) !== -1
                                        )?.group || ""
                                    )
                                    : true
                                )
                                .map(item => (
                                    <Tabs.Trigger key={crypto.randomUUID()} value={item.value}>
                                        {item.icon} {item.label}
                                    </Tabs.Trigger>
                                ))}
                        </Tabs.List>
                    </ Tabs.Root>
                </Flex>}

            </>

            : <Flex
                wrap={"wrap"} direction={"row"} width={'100%'}
                gapX={'1rem'} justifyContent={"start"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                paddingX={'5%'} paddingY={'1rem'}
            >
                <DrawerRoot size={"full"}>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <IconButton aria-label="" variant={"subtle"} >
                            <CiGlobe />
                        </IconButton>
                    </DrawerTrigger>
                    <Spacer />
                    <ColorModeButtonExtended variant="enclosed" size={"sm"} />
                    <DrawerContent>
                        <DrawerBody>
                            <Flex direction={"column"} gap={"3rem"} height={"100%"} alignItems={"center"} justifyContent={"center"}>
                                {navbarItems?.map(item => (
                                    <NavLink key={crypto.randomUUID()} to={item.value} end>
                                        <Text textStyle="3xl" fontWeight="medium">{item.label}</Text>
                                    </NavLink>
                                ))}
                            </Flex>
                        </DrawerBody>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>
            </Flex>}
    </Flex>;
}

export default Component;