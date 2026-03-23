export {
  compareDeep,
  compareReference,
  compareShallow,
  resolveComparator,
} from './comparator';
export {
  generateHistoryStateKey,
  readHistoryState,
  wrapHistoryState,
} from './history';
export {
  applyQueryParamConfig,
  buildPathByRoute,
  getRouteScore,
  getWildcardParamName,
  isWildcardSegment,
  matchRoute,
  matchSegments,
  rankRoutes,
  validateParams,
} from './matcher';
export { handleResolveResult, runMiddlewares } from './middleware';
export {
  addBase,
  getFullPath,
  normalizeBase,
  normalizeFullPath,
  normalizePath,
  parseUrl,
  resolveTo,
  sanitizePath,
  stripBase,
} from './path';
export { AllowedURLProtocols } from './protocols';
export { ResolveResultType } from './route';
export {
  defaultScrollBehavior,
  scrollToFragment,
  scrollToTarget,
} from './scroll';
