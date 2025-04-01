/**
 * Type definitions for styled-components
 * Estende DefaultTheme con la nostra interfaccia Theme personalizzata
 */
import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
