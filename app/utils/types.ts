export interface Content {
  id: string;
  title: string;
  body: Body;
  description: string;
  extension: string;
  meta: Meta;
  navigation: boolean;
  path: string;
  seo: SEO;
  stem: string;
  __hash__: string;
}

export interface Body {
  type: string;
  value: any[];
  toc: Toc;
}

export interface Toc {
  title: string;
  searchDepth: number;
  depth: number;
  links: any[];
}

export interface Meta {}

export interface SEO {
  title: string;
  description: string;
}
