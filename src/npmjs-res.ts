export interface Links {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

export interface Author {
  name: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Maintainer {
  username: string;
  email: string;
}

export interface NpmJsQueryResult {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: Date;
  links: Links;
  author: Author;
  publisher: Publisher;
  maintainers: Maintainer[];
}
