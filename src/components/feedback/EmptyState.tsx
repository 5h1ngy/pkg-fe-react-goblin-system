/**
 * EmptyState component
 * Displays a centered message with an icon when content is empty or an error occurs
 * Styled according to Ant Design principles with modern, rounded aesthetics
 * 
 * @module EmptyState
 */
import React from 'react';
import styled from 'styled-components';

export interface EmptyStateProps {
  /** Icon to display at the top of the empty state */
  icon?: React.ReactNode;
  /** Main title text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional action elements (buttons, links) */
  children?: React.ReactNode;
  /** Center the content vertically */
  verticalCenter?: boolean;
  /** Additional CSS class */
  className?: string;
}

const EmptyStateContainer = styled.div<{ verticalCenter?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.verticalCenter ? 'center' : 'flex-start'};
  text-align: center;
  padding: ${props => props.theme.spacing?.xl || '2rem'};
  width: 100%;
  min-height: ${props => props.verticalCenter ? '100%' : 'auto'};
  border-radius: ${props => props.theme.borderRadius?.lg || '8px'};
  background-color: ${props => props.theme.colors?.background || '#ffffff'};
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing?.lg || '1.5rem'};
  color: ${props => props.theme.colors?.primary || '#1890ff'};
  
  svg {
    width: 4rem;
    height: 4rem;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.typography?.fontSize?.xl || '1.5rem'};
  font-weight: ${props => props.theme.typography?.fontWeight?.semibold || '600'};
  margin: 0 0 ${props => props.theme.spacing?.sm || '0.5rem'};
  color: ${props => props.theme.colors?.textPrimary || 'rgba(0, 0, 0, 0.85)'};
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  font-size: ${props => props.theme.typography?.fontSize?.md || '1rem'};
  color: ${props => props.theme.colors?.textSecondary || 'rgba(0, 0, 0, 0.65)'};
  margin: 0 0 ${props => props.theme.spacing?.lg || '1.5rem'};
  max-width: 480px;
  line-height: 1.6;
`;

const ActionsContainer = styled.div`
  margin-top: ${props => props.theme.spacing?.md || '1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing?.md || '1rem'};
  
  & > * {
    margin-bottom: ${props => props.theme.spacing?.sm || '0.5rem'};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

/**
 * EmptyState component for displaying placeholder content
 * when there's no data or an error occurs
 * 
 * Features:
 * - Customizable icon, title, and description
 * - Support for action buttons or other children
 * - Option to center vertically in container
 * - Ant Design styling with modern rounded aesthetics
 */
const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  children,
  verticalCenter = false,
  className
}) => {
  return (
    <EmptyStateContainer verticalCenter={verticalCenter} className={className}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children && <ActionsContainer>{children}</ActionsContainer>}
    </EmptyStateContainer>
  );
};

export default EmptyState;
