import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { SiteLayout } from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import GalleryMusicPage from './pages/GalleryMusicPage';
import FinalePage from './pages/FinalePage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const storyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/story',
  component: StoryPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryMusicPage,
});

const finaleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/finale',
  component: FinalePage,
});

const routeTree = rootRoute.addChildren([indexRoute, storyRoute, galleryRoute, finaleRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
