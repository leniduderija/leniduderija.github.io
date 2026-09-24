export type LogoVariant = 'bauhaus' | 'ligature';

/** Active logo. Switching this updates the header, favicon and Apple touch icon. */
export const logoVariant: LogoVariant = 'bauhaus';

/** Both marks are drawn on a 64×64 canvas; `viewBox` crops tightly for inline use. */
export const logos: Record<LogoVariant, { viewBox: string; mark: (color: string) => string }> = {
  // A bar and base form the L, a full-height half-disc forms the D.
  bauhaus: {
    viewBox: '11.5 12 40 40',
    mark: (c) =>
      `<g fill="${c}"><rect x="12" y="14" width="8.5" height="36"/><rect x="12" y="41.5" width="18" height="8.5"/><path d="M33 14A18 18 0 0 1 33 50Z"/></g>`,
  },
  // One continuous stroke: the L flows along the baseline into an open D.
  ligature: {
    viewBox: '8.5 8.5 47 47',
    mark: (c) =>
      `<path d="M12.5 15V49H34.5A17 17 0 0 0 34.5 15H26.5" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="square"/>`,
  },
};
