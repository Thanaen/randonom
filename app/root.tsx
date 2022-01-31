import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import {
  AppShell,
  Navbar,
  Header,
  MantineProvider,
  Button,
  createStyles,
} from "@mantine/core";
import {
  ViewListIcon,
  PlusIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { NotificationsProvider } from "@mantine/notifications";

export const meta: MetaFunction = () => {
  return { title: "Randonom" };
};

const useStyles = createStyles({
  icon: {
    height: "20px",
    width: "20px",
  },
});

export default function App() {
  const styles = useStyles();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ colorScheme: "dark" }}
        >
          <NotificationsProvider>
            <AppShell
              navbar={
                <Navbar width={{ base: 360 }} padding="xs">
                  <Navbar.Section mb={8}>
                    <Button
                      variant="subtle"
                      leftIcon={
                        <LightBulbIcon className={styles.classes.icon} />
                      }
                      component={Link}
                      to="/"
                    >
                      Générateur
                    </Button>
                  </Navbar.Section>
                  <Navbar.Section mb={8}>
                    <Button
                      variant="subtle"
                      leftIcon={
                        <ViewListIcon className={styles.classes.icon} />
                      }
                      component={Link}
                      to="/list"
                    >
                      Liste
                    </Button>
                  </Navbar.Section>
                  <Navbar.Section>
                    <Button
                      variant="subtle"
                      leftIcon={<PlusIcon className={styles.classes.icon} />}
                      component={Link}
                      to="/add"
                    >
                      Ajouter un nom
                    </Button>
                  </Navbar.Section>
                </Navbar>
              }
              header={
                <Header height={60} padding="xs">
                  Randonom
                </Header>
              }
            >
              <Outlet />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
