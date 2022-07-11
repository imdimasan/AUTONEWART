export interface IHeaderMenu {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
  menuBody: string | null;
}
