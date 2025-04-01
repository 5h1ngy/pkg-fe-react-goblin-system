/**
 * Image component
 * Enhanced image component with additional features and styling
 * Designed according to Ant Design principles
 * 
 * @module Image
 */
import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Optional fit mode */
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** Optional border radius */
  borderRadius?: string;
  /** Optional fallback src if image fails to load */
  fallbackSrc?: string;
  /** Optional object-position value */
  objectPosition?: string;
  /** Optional loading strategy */
  loading?: 'lazy' | 'eager';
  /** Whether to use HTML5 native loading="lazy" */
  nativeLazy?: boolean;
  /** Optional wrapper class name */
  wrapperClassName?: string;
}

const ImageWrapper = styled.div<{
  borderRadius?: string;
  width?: string | number;
  height?: string | number;
}>`
  display: inline-block;
  overflow: hidden;
  border-radius: ${props => props.borderRadius || '0'};
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width || 'auto'};
  height: ${props => typeof props.height === 'number' ? `${props.height}px` : props.height || 'auto'};
  position: relative;
  box-shadow: ${props => props.theme.shadows?.sm || '0 1px 2px rgba(0, 0, 0, 0.05)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows?.md || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  }
`;

const StyledImage = styled.img<{
  fit?: ImageProps['fit'];
  objectPosition?: string;
  borderRadius?: string;
}>`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.fit || 'cover'};
  object-position: ${props => props.objectPosition || 'center'};
  border-radius: ${props => props.borderRadius || '0'};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

/**
 * Enhanced Image component with modern aesthetics
 * 
 * Features:
 * - Object-fit control
 * - Fallback image support
 * - Border radius
 * - Native lazy loading
 * - Smooth transitions and hover effects
 * - Ant Design styling with modern aesthetics
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  fit = 'cover',
  borderRadius,
  fallbackSrc,
  objectPosition,
  loading,
  nativeLazy,
  width,
  height,
  className,
  wrapperClassName,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);
  
  // Update imgSrc when src prop changes
  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);
  
  // Handle image load error
  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };
  
  // Handle loading attribute
  const loadingAttr = nativeLazy ? 'lazy' : loading;
  
  return (
    <ImageWrapper 
      borderRadius={borderRadius}
      width={width}
      height={height}
      className={wrapperClassName}
    >
      <StyledImage
        src={imgSrc}
        alt={alt}
        fit={fit}
        objectPosition={objectPosition}
        borderRadius={borderRadius}
        onError={handleError}
        loading={loadingAttr}
        className={className}
        {...rest}
      />
    </ImageWrapper>
  );
};

export default Image;
