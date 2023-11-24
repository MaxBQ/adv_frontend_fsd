export type Mode = Record<string, boolean | string | undefined>;
export type Additional = Array<string | undefined>;
export function classNames(
  cls: string,
  mode: Mode = {},
  additional: Additional = [],
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
