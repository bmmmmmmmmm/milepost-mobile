interface children {
  path: string;
  component: React.ComponentType<any>;
}

export interface Routes {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  children?: children[];
}
