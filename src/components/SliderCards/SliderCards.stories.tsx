import type { Meta, StoryObj } from "@storybook/react";
import SliderCards from "./SliderCards";
import { Icon } from "@chakra-ui/react";
import { FaLink, FaHeart } from "react-icons/fa";

export default {
    title: "Components/SliderCards",
    component: SliderCards,
    tags: ["autodocs"],
    argTypes: {
        isCircular: { control: "boolean" },
    },
} as Meta<typeof SliderCards>;

type Story = StoryObj<typeof SliderCards>;

const sampleItems = [
    {
        title: "Card 1",
        subTitle: "Prima card",
        description: "Descrizione della prima card",
        thumbnail: "https://via.placeholder.com/400x300",
        topics: ["React", "Storybook"],
        links: [{ label: "Link", icon: <Icon as={FaLink} />, onClick: () => {} }],
    },
    {
        title: "Card 2",
        subTitle: "Seconda card",
        description: "Descrizione della seconda card",
        thumbnail: "https://via.placeholder.com/400x300",
        topics: ["Chakra UI", "TypeScript"],
        links: [{ label: "Preferito", icon: <Icon as={FaHeart} />, onClick: () => {} }],
    },
    {
        title: "Card 3",
        subTitle: "Terza card",
        description: "Descrizione della terza card",
        thumbnail: "https://via.placeholder.com/400x300",
        topics: ["UI Design", "Accessibility"],
        links: [{ label: "Scopri di più", icon: <Icon as={FaLink} />, onClick: () => {} }],
    },
];

/**
 * Storia base: Slider con più elementi e navigazione circolare attivata
 */
export const Default: Story = {
    args: {
        items: sampleItems,
        isCircular: true,
    },
};

/**
 * Storia con navigazione non circolare
 */
export const NonCircular: Story = {
    args: {
        items: sampleItems,
        isCircular: false,
    },
};

/**
 * Storia con una sola card (senza navigazione)
 */
export const SingleCard: Story = {
    args: {
        items: [sampleItems[0]],
        isCircular: true,
    },
};

/**
 * Storia con due card (controllo comportamento per pochi elementi)
 */
export const TwoCards: Story = {
    args: {
        items: [sampleItems[0], sampleItems[1]],
        isCircular: true,
    },
};

/**
 * Storia senza elementi (deve restituire null senza errori)
 */
export const EmptyList: Story = {
    args: {
        items: [],
        isCircular: true,
    },
};

/**
 * Storia con card che non hanno immagini (per testare fallback UI)
 */
export const NoThumbnails: Story = {
    args: {
        items: sampleItems.map(item => ({ ...item, thumbnail: undefined })),
        isCircular: true,
    },
};

/**
 * Storia con card aventi molti topics e link per verificare la gestione dello spazio
 */
export const WithManyTopicsAndLinks: Story = {
    args: {
        items: sampleItems.map(item => ({
            ...item,
            topics: ["React", "TypeScript", "ChakraUI", "Storybook", "UI", "JSX"],
            links: [
                { label: "Link", icon: <Icon as={FaLink} />, onClick: () => {} },
                { label: "Preferito", icon: <Icon as={FaHeart} />, onClick: () => {} },
            ],
        })),
        isCircular: true,
    },
};