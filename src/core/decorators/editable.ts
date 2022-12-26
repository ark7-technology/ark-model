import * as _ from 'underscore';

import { Field } from '../fields';

/**
 * Annotate the property with Editable options.
 */
export function Editable(options: EditableOptions): PropertyDecorator {
  return Field<EditableFieldOptions>({ editable: options });
}

/**
 * Options for Editable annotation.
 */
export interface EditableOptions {
  type?: 'input' | 'textarea' | 'select' | 'select-toggle';

  options?: object | Array<{ label: any; value: any }>;

  hint?: string;
  info?: string;

  displayWidth?: string | number;
  editWidth?: string | number;
  width?: string | number;

  autoHide?: boolean;
  hideDisplay?: boolean;
  hideEditing?: boolean;
  hide?: boolean;

  /**
   * Reference options.
   */
  reference?: EditableOptionsReference;
}

export interface EditableOptionsReference {
  query?: object | (() => object) | (() => Promise<object>);
}

export interface EditableFieldOptions {
  editable: EditableOptions;
}
