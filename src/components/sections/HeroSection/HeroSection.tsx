import type { ComponentType, SVGProps } from 'react';

import { HeroOrbit } from './components/HeroOrbit';
import { isExternal } from './helpers/HeroSection.helpers';
import { useHeroSocialIcons, useTypingHeadline, type HeroIconType } from './hooks/HeroSection.hooks';
import type { HeroSectionProps } from './HeroSection.types';
import {
  HeroDescription,
  HeroEyebrow,
  HeroIconButton,
  HeroIconRow,
  HeroLayout,
  HeroLead,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle,
  HeroTitleGhost,
  HeroTitleText,
} from './HeroSection.style';
import { GithubIcon, LinkedinIcon } from '@styles/icons';
import { VisuallyHidden } from '@components/shared/VisuallyHidden';

const ICON_COMPONENTS: Record<HeroIconType, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export const HeroSection = ({ hero, socialLinks }: HeroSectionProps) => {
  const { currentTitle, longestTitle } = useTypingHeadline(hero);
  const iconLinks = useHeroSocialIcons(hero, socialLinks);

  return (
    <HeroSectionWrapper id="hero">
      <HeroLayout>
        <HeroLead>
          {hero.eyebrow && <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>}
          <HeroTitle aria-live="polite">
            <HeroTitleGhost aria-hidden="true">{longestTitle || currentTitle}</HeroTitleGhost>
            <HeroTitleText>{currentTitle}</HeroTitleText>
          </HeroTitle>
          {hero.subtitle && <HeroSubtitle>{hero.subtitle}</HeroSubtitle>}
          <HeroDescription>{hero.description}</HeroDescription>
          {iconLinks.length > 0 && (
            <HeroIconRow>
              {iconLinks.map(({ type, href, label, external }) => {
                const Icon = ICON_COMPONENTS[type];
                const isExternalLink = isExternal(href, external);

                return (
                  <HeroIconButton
                    key={type}
                    href={href}
                    target={isExternalLink ? '_blank' : undefined}
                    rel={isExternalLink ? 'noreferrer' : undefined}
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                    <VisuallyHidden>{label}</VisuallyHidden>
                  </HeroIconButton>
                );
              })}
            </HeroIconRow>
          )}
        </HeroLead>
        <HeroOrbit orbit={hero.orbit} />
      </HeroLayout>
    </HeroSectionWrapper>
  );
};
