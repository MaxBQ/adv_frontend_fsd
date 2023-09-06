declare module "*.scss" {
  const content: { [className: string]: string };
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
