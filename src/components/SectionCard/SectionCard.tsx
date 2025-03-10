import { FC } from "react"
import { Flex, Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";

import { EmptyState } from "@/components/Factory/Chakra/empty-state";

import { Skeleton, SkeletonCircle, SkeletonText } from "../Factory/Chakra/skeleton";
import { Avatar } from "../Factory/Chakra/avatar";
import { ComponentTypes } from "./sectionCard.types";

enum STATUS { IDLE, LOADING, SUCCESS, FAILED }

const SectionCard: FC<ComponentTypes> = ({
    status, isEmpty = true,
    header, subHeader, body,
    empty,
}) => <VStack gapY={"1rem"} width={"full"}>

        {header
            && <VStack gapY={"1rem"}>

                {status === STATUS.LOADING
                    && <>
                        {(header?.avatar || subHeader)
                            && <HStack gapY={"2rem"}>
                                {header?.avatar && <SkeletonCircle size="20" />}
                                {subHeader && <SkeletonText noOfLines={2} gap="4" width={"18rem"} />}
                            </HStack>
                        }
                        <VStack gapY={"2rem"}>
                            <Skeleton width={"25rem"} height="20rem" />
                        </VStack>
                    </>
                }

                {isEmpty !== true
                    && (status !== STATUS.LOADING && status === STATUS.SUCCESS)
                    && <HStack gapX={"1rem"}>
                        {header?.avatar && <Avatar size="2xl" variant="subtle" name={header.avatar} />}
                        {header?.title && <Heading size="4xl">{header.title}</Heading>}
                    </HStack>
                }

                {isEmpty !== true
                    && (status !== STATUS.LOADING && status === STATUS.SUCCESS)
                    && subHeader?.content
                }
            </VStack>
        }

        {isEmpty !== true
            && (status !== STATUS.LOADING && status === STATUS.SUCCESS)
            && <Flex direction={"column"} width={"full"}
                {...!body.disableStyle && {
                    borderRadius: '10px', borderWidth: "1px",
                    backgroundColor: "gray.100", _dark: { backgroundColor: "gray.950" },
                    height: "fit-content",
                    padding: '2rem', gapY: '1rem', justifyContent: "start",
                }}
                {...body.style}
            >
                {body.content}
            </Flex>
        }

        {isEmpty && status !== STATUS.LOADING
            && (status === STATUS.SUCCESS || status === STATUS.FAILED)
            && (empty && <EmptyState
                icon={empty.icon ? <Icon as={CiFolderOff} /> : undefined}
                title={empty.title ?? "No results found"}
                description={empty.description ?? undefined}
            />)
        }
    </VStack>

export default SectionCard;