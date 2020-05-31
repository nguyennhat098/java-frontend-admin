export class ContextMenuItem {
  order?: number;
  text?: string;
  isHide?: boolean = false;
  icon?: string;
  execute?: any;
  constructor(init?: Partial<ContextMenuItem>) {
    Object.assign(this, init);
  }
}
