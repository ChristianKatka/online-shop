import { getSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { getRouterState } from '../reducers';

export const {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl,
} = getSelectors();
