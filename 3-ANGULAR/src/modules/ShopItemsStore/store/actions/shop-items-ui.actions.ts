import { createAction, props } from '@ngrx/store';

export const selectListViewLayout = createAction(
  '[Shop Items UI] Select List View Layout',
  props<{ listViewLayout: 'list-view' | 'grid-view' | 'big-grid-view' }>()
);
