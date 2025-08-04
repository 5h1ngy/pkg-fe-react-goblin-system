import { useEffect, useMemo, useState } from 'react'

import type { PortfolioHero, PortfolioProfileLink } from '@data/portfolio.types'

export type HeroIconType = 'github' | 'linkedin';

export interface HeroIconLink {
  type: HeroIconType;
  href: string;
  label: string;
  external?: boolean;
}

const ICON_TYPES: HeroIconType[] = ['github', 'linkedin'];

const isIconType = (value?: string): value is HeroIconType => Boolean(value && ICON_TYPES.includes(value as HeroIconType));

const TYPING_INTERVAL = 2600

export const useTypingHeadline = (hero: PortfolioHero) => {
  const typingSequence = useMemo(
    () => (hero.typingTitles && hero.typingTitles.length > 0 ? hero.typingTitles : [hero.title]),
    [hero.typingTitles, hero.title],
  )

  const longestTitle = useMemo(
    () => typingSequence.reduce((longest, current) => (current.length > longest.length ? current : longest), ''),
    [typingSequence],
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typingSequence.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % typingSequence.length)
    }, TYPING_INTERVAL)

    return () => window.clearInterval(timer)
  }, [typingSequence])

  return { currentTitle: typingSequence[index] ?? longestTitle, longestTitle }
}

export const useHeroSocialIcons = (hero: PortfolioHero, socialLinks: PortfolioProfileLink[]) => {
  return useMemo<HeroIconLink[]>(() => {
    const entries = new Map<HeroIconType, HeroIconLink>();

    const register = (type?: string, href?: string, label?: string, external?: boolean) => {
      if (!isIconType(type) || !href) {
        return;
      }

      entries.set(type, {
        type,
        href,
        label: label ?? type,
        external,
      });
    };

    register(hero.primaryAction?.type, hero.primaryAction?.href, hero.primaryAction?.label, hero.primaryAction?.external);
    register(
      hero.secondaryAction?.type,
      hero.secondaryAction?.href,
      hero.secondaryAction?.label,
      hero.secondaryAction?.external,
    );

    socialLinks.forEach((link) => {
      register(link.type, link.url, link.label, true);
    });

    return Array.from(entries.values());
  }, [hero.primaryAction, hero.secondaryAction, socialLinks]);
};
