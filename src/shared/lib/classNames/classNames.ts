type Mode = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mode: Mode = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
