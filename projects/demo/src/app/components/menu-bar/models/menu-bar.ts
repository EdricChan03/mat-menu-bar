export interface GenericMenuItem<T = MenuItem> {
  title: string;
  command?: string | string[];
  disabled?: boolean;
  children?: T[];
}

export interface MenuItemWithIcon {
  icon?: string;
  svgIcon?: string;
}

export interface MenuItemOnClickListener {
  onClick?: (item: MenuItem, ev: Event) => void;
}

export interface MenuItemOnValueChangeListener<T> {
  onValueChange?: (newValue: T, oldValue: T) => void;
}

export interface DefaultMenuItem extends GenericMenuItem, MenuItemWithIcon, MenuItemOnClickListener { }

export interface MenuItemCheckbox extends GenericMenuItem, MenuItemOnClickListener, MenuItemOnValueChangeListener<boolean> {
  type: 'checkbox';
  value: boolean;
}

export interface MenuItemRadioChild extends MenuItemOnClickListener {
  title: string;
  value: string;
  disabled?: boolean;
}

export interface MenuItemRadio extends GenericMenuItem, MenuItemWithIcon, MenuItemOnClickListener, MenuItemOnValueChangeListener<string> {
  type: 'radio';
  value: string;
  children: MenuItemRadioChild[];
}

export type MenuItem = DefaultMenuItem | {
  type: 'divider';
} | MenuItemCheckbox | MenuItemRadio;

export interface MenuBarItem {
  title: string;
  items: MenuItem[];
  disabled?: boolean;
}
