import type { Viewport } from 'next';
import type React from 'react';

import { GlobalStyles, ResetStyles } from '#pkg/app/global-styles';
import { StyledComponentsRegistry } from '#pkg/app/registry';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ResetStyles />
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
