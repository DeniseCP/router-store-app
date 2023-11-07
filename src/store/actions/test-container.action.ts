import { createActionGroup, emptyProps } from '@ngrx/store';

export const testActions = createActionGroup({
  source: 'Test Container',
  events: {
    'Test Action 1': emptyProps(),
    'Test Action 2': emptyProps(),
  }
});
