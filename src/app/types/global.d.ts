declare module "*.scss" {
  const content: Record<string, string>;
  export = content;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.png";
declare module "*.jpe";
declare module "*.jpeg";
declare module "*.gif";
declare const __IS_DEV__: boolean;
declare const __API__: string;
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
