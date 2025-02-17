import React from "react";
import { CoimponentProps } from "./StyledMarkdown.types";
import "highlight.js/styles/github.css";
import "./StyledMarkdown.scss";
/**
 * Componente `Component`.
 *
 * Renderizza contenuto Markdown formattato, con supporto per GitHub Flavored Markdown e
 * evidenziazione della sintassi del codice.
 *
 * @param {CoimponentProps} props - Proprietà del componente, include il contenuto Markdown.
 * @returns {JSX.Element} - Un elemento che visualizza il contenuto Markdown renderizzato.
 */
declare const StyledMarkdown: React.FC<CoimponentProps>;
export default StyledMarkdown;
