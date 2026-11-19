export interface MenuItem {
  title: string;
  route?: string;
  icon?: string;
  children?: MenuItem[];
}