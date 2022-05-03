import { createSelector } from "reselect";

import { RootState } from "@models/state";

export const languageSelector = createSelector(
  (state: RootState) => state.UI.language,
  (language) => language
);

export const linksMuseumSelector = createSelector(
  (state: RootState) => state.UI.links.linksMuseum,
  (links) => links
);

export const sidebarSelector = createSelector(
  (state: RootState) => state.UI.sidebar,
  (sidebar) => sidebar
);
