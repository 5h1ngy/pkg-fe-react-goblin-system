import { useMemo, useState } from 'react'
import type { ComponentType, SVGProps } from 'react'

import type { PortfolioActionLink } from '@data/portfolio.types'
import { ArrowIcon, DocsIcon, GithubIcon, GlobeIcon, LinkedinIcon, StorybookIcon } from '@styles/icons'
import type { ProductsSliderProps } from './ProductsSection.types'
import {
  ProductActionButton,
  ProductActions,
  ProductCard,
  ProductMeta,
  ProductSummary,
  ProductTag,
  ProductTags,
  ProductTitle,
  ProductsArrow,
  ProductsCarousel,
  ProductsCounter,
  ProductsNav,
} from './ProductsSection.style'

type ActionType = NonNullable<PortfolioActionLink["type"]>;

const ACTION_ICON: Record<ActionType, ComponentType<SVGProps<SVGSVGElement>>> = {
  website: GlobeIcon,
  github: GithubIcon,
  docs: DocsIcon,
  linkedin: LinkedinIcon,
  storybook: StorybookIcon,
}

const sortActions = (links: PortfolioActionLink[]) => {
  const priority: Record<string, number> = {
    website: 0,
    docs: 1,
    storybook: 2,
    github: 3,
    linkedin: 4,
  }
  return [...links].sort((a, b) => (priority[a.type ?? ''] ?? 99) - (priority[b.type ?? ''] ?? 99))
}

const isExternal = (href: string) => /^https?:\/\//i.test(href)

export const ProductsSlider = ({ products }: ProductsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const total = products.projects.length
  const hasMultiple = total > 1
  const product = useMemo(() => products.projects[currentIndex] ?? null, [products.projects, currentIndex])

  const actions = useMemo(() => {
    if (!product) {
      return [] as PortfolioActionLink[]
    }
    const raw = product.links ?? (product.link ? [product.link] : [])
    return sortActions(raw)
  }, [product])

  const hasPrev = hasMultiple && currentIndex > 0
  const hasNext = hasMultiple && currentIndex < total - 1

  const handlePrev = () => {
    if (!hasPrev) {
      return
    }
    setDirection('prev')
    setCurrentIndex((index) => Math.max(index - 1, 0))
  }

  const handleNext = () => {
    if (!hasNext) {
      return
    }
    setDirection('next')
    setCurrentIndex((index) => Math.min(index + 1, total - 1))
  }

  return (
    <ProductsCarousel>
      {product && (
        <ProductCard key={product.name} $direction={direction}>
          <ProductMeta>
            <ProductActions>
              {actions.map((action) => {
                const Icon = action.type ? ACTION_ICON[action.type] ?? GlobeIcon : GlobeIcon
                const external = action.external !== false || isExternal(action.href)
                return (
                  <ProductActionButton
                    key={`${action.type}-${action.href}`}
                    href={action.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                  >
                    <Icon aria-hidden="true" />
                    {action.label}
                  </ProductActionButton>
                )
              })}
            </ProductActions>
            <ProductsCounter>
              {String(currentIndex + 1).padStart(2, '0')} | {String(total).padStart(2, '0')}
            </ProductsCounter>
          </ProductMeta>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductSummary>{product.description}</ProductSummary>
          {product.tags.length > 0 && (
            <ProductTags>
              {product.tags.map((tag) => (
                <ProductTag key={tag}>{tag}</ProductTag>
              ))}
            </ProductTags>
          )}
        </ProductCard>
      )}

      {hasMultiple && (
        <ProductsNav>
          <ProductsArrow type="button" onClick={handlePrev} aria-label="Prodotto precedente" disabled={!hasPrev}>
            <ArrowIcon direction="left" />
          </ProductsArrow>
          <ProductsArrow type="button" onClick={handleNext} aria-label="Prodotto successivo" disabled={!hasNext}>
            <ArrowIcon direction="right" />
          </ProductsArrow>
        </ProductsNav>
      )}
    </ProductsCarousel>
  )
}
