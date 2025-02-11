import { Suspense, lazy, ComponentType, ReactElement, FC, useRef, useEffect, } from 'react';
import gsap from 'gsap';

function withGsapAnimation<P extends object>(WrappedComponent: ComponentType<P>): FC<P> {
  const GsapAnimated: FC<P> = (props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      }
    }, []);

    return <div ref={ref} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <WrappedComponent {...props} />
    </div>
  };

  return GsapAnimated;
};

export function withDynamicLayouts<T>(opts: { layoutName: string, loader?: ReactElement }, props?: T): ReactElement<T> {

  const Page = lazy<FC<any>>(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const pageName = opts.layoutName;
    const directoryName = pageName.charAt(0).toLowerCase() + pageName.slice(1)

    const module = await import(`./../layouts/${directoryName}/${opts.layoutName}Layout.ts`);
    const GsapWrapped = withGsapAnimation<ComponentType<T>>(module.default);

    return { default: GsapWrapped };
  });

  return <Suspense fallback={opts.loader}>
    <Page {...props} />
  </Suspense>
};

export function withDynamicPages<T>(opts: { pageName: string, loader?: ReactElement }, props?: T): ReactElement<T> {

  const Content = lazy<FC<any>>(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const pageName = opts.pageName;
    const directoryName = pageName.charAt(0).toLowerCase() + pageName.slice(1)

    const module = await import(`./../pages/${directoryName}/${opts.pageName}Page.ts`);
    const GsapWrapped = withGsapAnimation<ComponentType<T>>(module.default);

    return { default: GsapWrapped };
  });

  return <Suspense fallback={opts.loader}>
    <Content {...props} />
  </Suspense>
};
