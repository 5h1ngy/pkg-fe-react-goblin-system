/**
 * Base theme configuration for the Goblin System design system
 * Defines colors, spacing, typography, and other design tokens
 * Supports light and dark modes
 * Updated for Ant Design 2025 standards
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
  bgContainerHover: string;
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  borderBase: string;
  borderStrong: string;
  borderLight: string;
  shadow: string;
  background: string;
  backgroundDark: string;
  modalOverlay: string;
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
    semibold: number;
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
    xl: string;
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
  borderRadius?: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Light theme colors
const lightColors: ColorPalette = {
  primary: '#1890ff',
  secondary: '#722ed1',
  success: '#52c41a',
  warning: '#faad14',
  danger: '#ff4d4f',
  info: '#1890ff',
  bgDefault: '#f0f2f5',
  bgElevated: '#ffffff',
  bgContainer: '#f5f5f5',
  bgContainerHover: 'rgba(0, 0, 0, 0.04)',
  textPrimary: 'rgba(0, 0, 0, 0.85)',
  textSecondary: 'rgba(0, 0, 0, 0.65)',
  textDisabled: 'rgba(0, 0, 0, 0.25)',
  borderBase: '#d9d9d9',
  borderStrong: '#8c8c8c',
  borderLight: '#e8e8e8',
  shadow: 'rgba(0, 0, 0, 0.15)',
  background: '#f0f2f5',
  backgroundDark: '#141414',
  modalOverlay: 'rgba(0, 0, 0, 0.45)',
};

// Dark theme colors
const darkColors: ColorPalette = {
  primary: '#177ddc',
  secondary: '#9254de',
  success: '#49aa19',
  warning: '#d89614',
  danger: '#a61d24',
  info: '#177ddc',
  bgDefault: '#141414',
  bgElevated: '#1f1f1f',
  bgContainer: '#141414',
  bgContainerHover: 'rgba(255, 255, 255, 0.08)',
  textPrimary: 'rgba(255, 255, 255, 0.85)',
  textSecondary: 'rgba(255, 255, 255, 0.65)',
  textDisabled: 'rgba(255, 255, 255, 0.30)',
  borderBase: '#434343',
  borderStrong: '#8c8c8c',
  borderLight: '#303030',
  shadow: 'rgba(0, 0, 0, 0.45)',
  background: '#141414',
  backgroundDark: '#000000',
  modalOverlay: 'rgba(0, 0, 0, 0.75)',
};

// Typography configuration
const typography: Typography = {
  // 2025 Modern Font Stack
  fontFamily: "'Inter Variable', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI Variable', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontFamilyMono: "'JetBrains Mono', 'SF Mono', SFMono-Regular, ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono', monospace",
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    xs: 1.4,
    sm: 1.5,
    md: 1.6,
    lg: 1.7,
    xl: 1.8,
    xxl: 1.8,
  },
};

// Spacing scale
const spacing: Spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

// Border radius scale
const radii: Radii = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  full: '9999px',
};

// Breakpoints for responsive design
const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

// Light theme
export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  typography,
  spacing,
  radii,
  breakpoints,
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.15)',
    xl: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
  zIndices: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    fixed: 200,
    modal: 1000,
    popover: 1500,
    tooltip: 2000,
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
};

// Dark theme
export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  typography,
  spacing,
  radii,
  breakpoints,
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    md: '0 2px 4px rgba(0, 0, 0, 0.5)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.5)',
    xl: '0 8px 24px rgba(0, 0, 0, 0.7)',
  },
  zIndices: {
    base: 1,
    dropdown: 10,
    sticky: 100,
    fixed: 200,
    modal: 1000,
    popover: 1500,
    tooltip: 2000,
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
};

// Default theme
export default lightTheme;
