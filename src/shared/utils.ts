// Define the type for the allowed Chakra UI color names based on the default theme
export type ChakraColorName =
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink';

// List of Chakra UI default colors (reference: https://chakra-ui.com/docs/styled-system/theme#colors)
const CHAKRA_COLORS: readonly ChakraColorName[] = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
];

/**
 * Generates a random Chakra UI color from the default color palette.
 *
 * @returns {ChakraColorName} A random color name from the Chakra UI default palette.
 */
export function getRandomColor(): ChakraColorName {
    const randomIndex = Math.floor(Math.random() * CHAKRA_COLORS.length);
    return CHAKRA_COLORS[randomIndex];
}
