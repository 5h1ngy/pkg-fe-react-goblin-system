/**
 * Image component
 * Enhanced image component with additional features and styling
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
  transition: opacity 0.3s ease;
`;

/**
 * Enhanced Image component
 * 
 * Features:
 * - Object-fit control
 * - Fallback image support
 * - Border radius
 * - Native lazy loading
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
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(src);
  
  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

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
        borderRadius={borderRadius}
        objectPosition={objectPosition}
        loading={nativeLazy ? 'lazy' : loading}
        onError={handleError}
        className={className}
        width={width}
        height={height}
        {...rest}
      />
    </ImageWrapper>
  );
};

export default Image;
