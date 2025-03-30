/**
 * EmptyState component
 * Displays a centered message with an icon when content is empty or an error occurs
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
  padding: ${props => props.theme.spacing.xl};
  width: 100%;
  min-height: ${props => props.verticalCenter ? '100%' : 'auto'};
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
  
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  margin: 0 0 ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

const Description = styled.p`
  font-size: ${props => props.theme.typography.fontSize.md};
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 0 ${props => props.theme.spacing.lg};
  max-width: 400px;
`;

const ActionsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

/**
 * EmptyState component for displaying placeholder content
 * when there's no data or an error occurs
 * 
 * Features:
 * - Customizable icon, title, and description
 * - Support for action buttons or other children
 * - Option to center vertically in container
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
