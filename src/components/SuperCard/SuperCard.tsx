import React, { useState } from "react";
import {
    Flex,
    Box,
    Image,
    Icon,
    Text,
    Wrap,
    Badge,
    IconButton,
    Card
} from "@chakra-ui/react";

import { Props, Link as LinkType } from "./SuperCard.types";
import { getRandomColor } from "@/shared/utils";

/**
 * ORIENTAMENTO:
 * - base, xs, sm, md => "column" (verticale)
 * - lg, 2xl => "row" (orizzontale)
 */
const ORIENTATION = {
    base: "column",
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
    "2xl": "row",
};

/**
 * DIMENSIONI PER LA CARD
 * - Da base a md => piena larghezza, altezza dinamica
 * - Da lg in su => larghezza più fissa, altezza contenuta
 */
const CARD_WIDTH = {
    base: "100%",
    xs: "18rem",
    sm: "26rem",
    md: "24rem",
    lg: "24rem",
    xl: "24rem",
    "2xl": "24rem",
};

const CARD_HEIGHT = {
    base: "auto",
    xs: "22rem",
    sm: "16rem",
    md: "16rem",
    lg: "16rem",
    xl: "16rem",
    "2xl": "16rem",
};

/**
 * DIMENSIONI PER IL THUMBNAIL
 * Quando la card è verticale (fino a md) il thumbnail occuperà tutta la larghezza in alto;
 * quando è orizzontale (da lg in poi) diventa una colonna a sinistra, quindi puoi mettere
 * una larghezza fissa e farlo estendere in altezza al 100% della card.
 */
const THUMBNAIL_WIDTH = {
    base: "100%", // in verticale, thumbnail sopra largo al 100%
    xs: "100%",
    sm: "8rem",
    md: "8rem",
    lg: "8rem", // in orizzontale, thumbnail fisso a 14rem di larghezza
    "2xl": "8rem",
};

const THUMBNAIL_MAX_HEIGHT = {
    base: "8rem", // altezza massima in verticale
    xs: "8rem",
    sm: "100%",
    md: "100%",
    lg: "100%", // in orizzontale il thumbnail si estende in altezza al 100% della card
    "2xl": "100%",
};

/**
 * DIMENSIONI PER IL THUMBNAIL FALLBACK
 * Per semplicità, riuso le stesse misure del thumbnail principale.
 */
const THUMBNAIL_FALLBACK_WIDTH = THUMBNAIL_WIDTH;
const THUMBNAIL_FALLBACK_MAX_HEIGHT = THUMBNAIL_MAX_HEIGHT;

/**
 * Card compatta (visualizza solo il titolo in verticale).
 * Non hai richiesto modifiche specifiche, la lascio invariata,
 * ma puoi adeguarla con breakpoints se necessario.
 */
const COMPACT_CARD_WIDTH = {
    base: "4rem",
    xs: "4rem",
    sm: "4rem",
    md: "4rem",
    lg: "4rem",
    "2xl": "4rem",
};
const COMPACT_CARD_HEIGHT = {
    base: "auto",
    xs: "auto",
    sm: "16rem",
    md: "16rem",
    lg: "16rem",
    xl: "16rem",
    "2xl": "16rem",
};

function CompactCard({
    title,
    onCardClick,
    display,
}: Pick<Props, "title" | "onCardClick" | "display">) {
    return (
        <Flex
            style={{ cursor: "pointer" }}
            overflow="hidden"
            flexDirection="row"
            display={display}
            width={COMPACT_CARD_WIDTH}
            height={COMPACT_CARD_HEIGHT}
            borderRadius="15px"
            backgroundColor="gray.100"
            _dark={{ backgroundColor: "gray.900" }}
            align="center"
            justify="center"
            onClick={() => onCardClick?.()}
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
    );
}

/**
 * Gestisce la visualizzazione di un thumbnail oppure della relativa fallback.
 */
function CardThumbnail({
    thumbnail,
    thumbnailError,
    onError,
    fallbackIcon,
}: {
    thumbnail?: string;
    thumbnailError: boolean;
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    fallbackIcon?: React.ElementType;
}) {
    if (!thumbnail) return null;

    // Se c'è un thumbnail valido
    if (thumbnail && !thumbnailError) {
        return (
            <Image
                alt="thumbnail"
                objectFit="cover"
                width={THUMBNAIL_WIDTH}
                maxHeight={THUMBNAIL_MAX_HEIGHT}
                src={thumbnail}
                onError={onError}
            />
        );
    }

    // Se la prima immagine ha fallito e abbiamo una fallbackIcon
    if (fallbackIcon) {
        return (
            <Flex
                align="center"
                justify="center"
                width={THUMBNAIL_FALLBACK_WIDTH}
                maxHeight={THUMBNAIL_FALLBACK_MAX_HEIGHT}
                backgroundColor="transparent"
                p="2rem"
            >
                <Icon as={fallbackIcon} boxSize={12} />
            </Flex>
        );
    }

    return null;
}

/**
 * Card estesa (visualizza thumbnail, titoli, descrizione, badge, footer).
 * - Verticale per base -> md
 * - Orizzontale da lg -> 2xl
 */
function DefaultCard(props: Props) {
    const {
        thumbnail,
        thumbnailFallback,
        title,
        subTitle,
        description,
        topics,
        links,
        onCardClick,
        children,
        headerProps,
        bodyProps,
        footerProps,
        size = "md",
        variant = "outline",
        colorPalette = "gray",
        display,
    } = props;

    // Stato dell'errore sul thumbnail
    const [thumbnailError, setThumbnailError] = useState(false);

    // Funzione che scatta se fallisce il caricamento dell'immagine
    const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null;
        setThumbnailError(true);
    };

    return (
        <Card.Root
            size={size}
            variant={variant}
            colorPalette={colorPalette}
            flexDirection={ORIENTATION}
            overflow="hidden"
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            display={display}
        >
            <CardThumbnail
                thumbnail={thumbnail}
                thumbnailError={thumbnailError}
                onError={handleThumbnailError}
                fallbackIcon={thumbnailFallback}
            />

            {/* Contenitore dei testi, badge, footer */}
            <Flex flexDirection="column" flex="1">
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
                    // Occupare lo spazio rimanente, così il footer resta in basso
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    {/* Parte di contenuto scorrevole, se la descrizione è lunga */}
                    <Box mb="2" maxHeight="6rem" overflowY="auto">
                        {description && (
                            <Text textStyle="sm" fontWeight="normal">
                                {description}
                            </Text>
                        )}

                        {Array.isArray(topics) && topics.length > 0 && (
                            <Wrap gap={2} mt="2">
                                {topics.map((topic) => (
                                    <Badge
                                        key={topic}
                                        colorPalette={getRandomColor()}
                                        variant="subtle"
                                    >
                                        {topic}
                                    </Badge>
                                ))}
                            </Wrap>
                        )}

                        {children}
                    </Box>

                    {/* Footer in basso */}
                    {Array.isArray(links) && links.length > 0 && (
                        <Card.Footer
                            display="flex"
                            flexDirection="row"
                            padding={0}
                            justifyContent={{ base: "flex-start", sm: "flex-end" }}
                            {...footerProps}
                        >
                            {links.map((link: LinkType) => (
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
                </Card.Body>
            </Flex>
        </Card.Root>
    );
}

/**
 * Componente principale che decide se mostrare la versione compatta o quella estesa.
 */
const SuperCard: React.FC<Props> = (props) => {
    const { compact = false } = props;
    return compact ? <CompactCard {...props} /> : <DefaultCard {...props} />;
};

export default SuperCard;
