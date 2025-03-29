/**
 * Base theme configuration for the Goblin System design system
 * Defines colors, spacing, typography, and other design tokens
 * Supports light and dark modes
 * @module theme
 */

// Color palette definitions
export interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  bgDefault: string;
  bgElevated: string;
  bgContainer: string;
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  borderBase: string;
  borderStrong: string;
  borderLight: string;
  shadow: string;
}

// Typography definitions
export interface Typography {
  fontFamily: string;
  fontFamilyMono: string;
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  lineHeight: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

// Spacing scale definitions
export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

// Radius scale definitions
export interface Radii {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  full: string;
}

// Breakpoints for responsive design
export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

// Main theme interface
export interface Theme {
  mode: 'light' | 'dark';
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  radii: Radii;
  breakpoints: Breakpoints;
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  zIndices: {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
  };
}

// Light theme colors
const lightColors: ColorPalette = {
  primary: '#1890ff',
  secondary: '#722ed1',
  success: '#52c41a',
  warning: '#faad14',
  danger: '#f5222d',
  info: '#13c2c2',
  bgDefault: '#f0f2f5',
  bgElevated: '#ffffff',
  bgContainer: '#fafafa',
  textPrimary: 'rgba(0, 0, 0, 0.85)',
  textSecondary: 'rgba(0, 0, 0, 0.65)',
  textDisabled: 'rgba(0, 0, 0, 0.25)',
  borderBase: '#d9d9d9',
  borderStrong: '#bfbfbf',
  borderLight: '#f0f0f0',
  shadow: 'rgba(0, 0, 0, 0.05)',
};

// Dark theme colors
const darkColors: ColorPalette = {
  primary: '#177ddc',
  secondary: '#9254de',
  success: '#49aa19',
  warning: '#d89614',
  danger: '#d32029',
  info: '#13a8a8',
  bgDefault: '#141414',
  bgElevated: '#1f1f1f',
  bgContainer: '#262626',
  textPrimary: 'rgba(255, 255, 255, 0.85)',
  textSecondary: 'rgba(255, 255, 255, 0.65)',
  textDisabled: 'rgba(255, 255, 255, 0.30)',
  borderBase: '#434343',
  borderStrong: '#595959',
  borderLight: '#303030',
  shadow: 'rgba(0, 0, 0, 0.45)',
};

// Shared typography settings
const typography: Typography = {
  fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeight: {
    xs: 1.25,
    sm: 1.4,
    md: 1.5,
    lg: 1.55,
    xl: 1.6,
    xxl: 1.3,
  },
};

// Shared spacing settings
const spacing: Spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

// Shared radii settings
const radii: Radii = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '12px',
  full: '9999px',
};

// Shared breakpoints
const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// Light theme configuration
export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  typography,
  spacing,
  radii,
  breakpoints,
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

// Dark theme configuration
export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  typography,
  spacing,
  radii,
  breakpoints,
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.5)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
  },
  zIndices: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

// Default theme is light
const theme = lightTheme;

export default theme;
