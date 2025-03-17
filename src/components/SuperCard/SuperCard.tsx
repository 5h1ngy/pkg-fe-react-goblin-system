import React, { useState } from "react";
import {
    Card,
    Flex,
    Image,
    Text,
    Badge,
    IconButton,
    Icon,
    Box,
    Wrap,
} from "@chakra-ui/react";
import { Props } from "./SuperCard.types";
import { getRandomColor } from "@/shared/utils";

const SuperCard: React.FC<Props> = (props) => {
    const {
        compact = false,
        orientation = "vertical",
        thumbnail, thumbnailFallback,
        title, subTitle,
        description,
        topics, links,
        onCardClick,
        children,
        // Props passati a <Card.Root>
        size = "md",
        variant = "outline",
        colorPalette = "gray",
        ...restCardRootProps
    } = props;

    const { headerProps, bodyProps, footerProps } = props;

    const flexDirection = orientation === "horizontal" ? "row" : "column";
    const linkDirection = orientation === "horizontal" ? "column" : "row";

    // Stato che determina se l'immagine è in errore.
    const [thumbnailError, setThumbnailError] = useState(false);

    return compact ? (
        <Flex
            style={{ cursor: "pointer" }}
            overflow="hidden"
            flexDirection="row"
            // Qui puoi mettere dimensioni "fisse" anche in modalità compatta
            minHeight="16rem"
            maxHeight="16rem"
            minWidth="4rem"
            maxWidth="4rem"
            borderRadius="15px"
            backgroundColor="gray.100"
            _dark={{ backgroundColor: "gray.900" }}
            align="center"
            justify="center"
            onClick={() => onCardClick && onCardClick()}
        >
            <Text
                textStyle="sm"
                fontWeight="medium"
                writingMode="vertical-rl"
                textAlign="center"
            >
                {title}
            </Text>
        </Flex>
    ) : (
        <Card.Root
            size={size}
            variant={variant}
            colorPalette={colorPalette}
            flexDirection={flexDirection}
            overflow="hidden"
            // Esempio di dimensioni "fisse" leggermente diverse a seconda del breakpoint
            width={{ base: "19rem", md: "17rem", lg: "15rem" }}
            height={{ base: "28rem", md: "26rem", lg: "24rem" }}
            // Props passati a <Card.Root>
            {...restCardRootProps}
        >
            {thumbnail && !thumbnailError ? (
                <Image
                    alt="thumbnail"
                    objectFit="cover"
                    width={orientation === "horizontal" ? "10rem" : "100%"}
                    maxHeight={orientation === "horizontal" ? "10rem" : "12rem"}
                    src={thumbnail}
                    onError={(e) => {
                        // Impedisci ulteriori cicli di errore in caso di errore anche sulla fallback
                        e.currentTarget.onerror = null;
                        setThumbnailError(true);
                    }}
                />
            ) : thumbnail && thumbnailFallback ? (
                // Se c'è la prop thumbnail ma l'immagine ha fallito il caricamento, mostriamo l'icona
                <Flex
                    align="center"
                    justify="center"
                    width={orientation === "horizontal" ? "10rem" : "100%"}
                    maxHeight={orientation === "horizontal" ? "10rem" : "12rem"}
                    // Background trasparente
                    backgroundColor="transparent"
                    padding={'2rem'}
                >
                    <Icon as={thumbnailFallback} boxSize={12} /* icona più grande */ />
                </Flex>
            ) : null}

            {(title || subTitle) && (
                <Card.Header {...headerProps}>
                    {title && (
                        <Text as="h2" textStyle="lg" fontWeight="bold">
                            {title}
                        </Text>
                    )}
                    {subTitle && (
                        <Text textStyle="sm" color="fg.muted">
                            {subTitle}
                        </Text>
                    )}
                </Card.Header>
            )}

            <Card.Body
                cursor={onCardClick ? "pointer" : "auto"}
                onClick={onCardClick}
                {...bodyProps}
            >
                {/* Contenitore scrollabile se la descrizione è troppo lunga */}
                {description && (
                    <Box mb="2" maxHeight="6rem" overflowY="auto">
                        <Text textStyle="sm" fontWeight="normal">
                            {description}
                        </Text>
                    </Box>
                )}

                {topics && topics.length > 0 && (
                    <Wrap gap={2}>
                        {topics.map((topic) => (
                            <Badge key={topic} colorPalette={getRandomColor()} variant="subtle">
                                {topic}
                            </Badge>
                        ))}
                    </Wrap>
                )}

                {children}
            </Card.Body>

            {links && links.length > 0 && (
                <Card.Footer
                    display="flex"
                    flexDirection={linkDirection}
                    flexWrap="wrap"
                    gap="2"
                    justifyContent="flex-start"
                    {...footerProps}
                >
                    {links.map((link) => (
                        <IconButton
                            key={link.label}
                            variant="ghost"
                            aria-label={link.label}
                            onClick={link.onClick}
                        >
                            {link.icon}
                        </IconButton>
                    ))}
                </Card.Footer>
            )}
        </Card.Root>
    );
};

export default SuperCard;
