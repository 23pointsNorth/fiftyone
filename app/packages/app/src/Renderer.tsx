import { Loading, Pending } from "@fiftyone/components";
import { subscribe, subscribeTransition } from "@fiftyone/relay";
import { theme, themeConfig } from "@fiftyone/state";
import { useColorScheme } from "@mui/material";
import React, { Suspense, useEffect, useLayoutEffect } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Queries, useRouterContext } from "./routing";
import { Entry } from "./routing/RouterContext";

export const pendingEntry = atom<boolean>({
  key: "pendingEntry",
  default: false,
});

export const entry = atom<Entry<Queries> | null>({
  key: "Entry",
  default: null,
  dangerouslyAllowMutability: true,
});

const ColorScheme = () => {
  const { setMode } = useColorScheme();
  const current = useRecoilValue(themeConfig);
  const setTheme = useSetRecoilState(theme);
  useLayoutEffect(() => {
    if (current !== "browser") {
      setTheme(current);
      setMode(current);
    }
  }, [current]);

  return null;
};

const Renderer = () => {
  const [routeEntry, setRouteEntry] = useRecoilState(entry);
  const [pending, setPending] = useRecoilState(pendingEntry);
  const router = useRouterContext();

  useEffect(() => {
    router.load().then(setRouteEntry);
    return subscribe((_, { set }) => {
      set(entry, router.get());
      set(pendingEntry, false);
    });
  }, [router, setRouteEntry]);

  useEffect(
    () =>
      subscribeTransition("samplesTransition", (_, __, { set }) =>
        set(pendingEntry, false)
      ),
    []
  );

  useEffect(() => {
    return router.subscribe(
      () => undefined,
      () => setPending(true)
    );
  }, [router, setPending]);

  const loading = <Loading>Pixelating...</Loading>;

  if (!routeEntry) return loading;

  return (
    <Suspense fallback={loading}>
      <ColorScheme />
      <Route route={routeEntry} />
      {pending && <Pending />}
    </Suspense>
  );
};

const Route = ({ route }: { route: Entry<Queries> }) => {
  const Component = route.component;
  return <Component prepared={route.preloadedQuery} />;
};

export default Renderer;
