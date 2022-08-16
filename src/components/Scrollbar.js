import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export const Scrollbar = ({
  children,
  className,
  options,
  ...props
}) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: `${className} os-theme-thin`,
        scrollbars: {
          autoHide: 'never',
          touchSupport: false,
        },
        ...options,
      }}
      {...props}>
      {children}
    </OverlayScrollbarsComponent>
  );
};
