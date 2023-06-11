import { Pages } from '../components/sidebar/menu';

interface IBaseElement {
  element: Element | null;

  remove(): void;

  destroy(): void;

  render(): void;
}

export interface IComponent extends IBaseElement {
  subElements?: SubElementsType;

  getSubElements?(element: Element): SubElementsType;
}

export interface IPage extends IBaseElement {
  type: Pages;

  initComponents?(): void;

  renderComponents?(): void;
}

export type SubElementsType<T extends keyof any = string> = {
  [P in T]: HTMLElement;
};

export interface NodeListOfSubElements<T> extends NodeListOf<HTMLDatasetElement<T>> {}

export interface IComponents {
  [element: string]: IComponent | object;
}

export interface HTMLDatasetElement<T = string> extends HTMLElement {
  dataset: {
    element: `${string & keyof T}`;
  };
}

export enum SortType {
  STRING = 'string',
  NUMBER = 'number',
  CUSTOM = 'custom'
}

export interface HeaderType<T> {
  id: T;
  title: string;
  sortable: boolean;
  sortType?: SortType;
  template?: (data: any) => string;
  customSorting?: (a: any, b: any) => number | boolean;
}

export type RangeType<T> = {
  from: T;
  to: T;
};

export type DateRangeType = RangeType<Date>;

export interface DateSelectEvent extends CustomEvent<DateRangeType> {}
