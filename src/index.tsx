/**
 * Goblin System - Punto di accesso principale
 * Esporta componenti e provider per un facile utilizzo della libreria
 * 
 * @module GoblinSystem
 */

// Esporta il provider principale
export { default as GoblinProvider } from './providers/GoblinProvider';

// Esporta i componenti
export * from './components';

// Esporta i provider
export * from './providers';

// Esporta i servizi
export * from './services/auth';

// Esporta gli store
export * from './store/auth';

// Esporta il tema
export * from './theme/theme';
