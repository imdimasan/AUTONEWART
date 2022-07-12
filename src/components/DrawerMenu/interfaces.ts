export interface IDrawerMenu {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  menuBody: string | null;
}
