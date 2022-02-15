import { NavLink, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";
import { AppShell, Navbar, Header, MantineProvider, Button, createStyles } from "@mantine/core";
import { ViewListIcon, PlusIcon, LightBulbIcon } from "@heroicons/react/outline";
import { NotificationsProvider } from "@mantine/notifications";
import type { ReactNode } from "react";

export const meta: MetaFunction = () => {
  return { title: "Randonom" };
};

const useStyles = createStyles({
  icon: {
    height: "20px",
    width: "20px",
  },
});

interface NavButtonProps {
  to: string;
  children: ReactNode;
  leftIcon: ReactNode;
}

const NavButton = ({ to, children, leftIcon }: NavButtonProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button variant={isActive ? "filled" : "subtle"} leftIcon={leftIcon}>
          {children}
        </Button>
      )}
    </NavLink>
  );
};

export default function App() {
  const styles = useStyles();

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: "dark" }}>
          <NotificationsProvider>
            <AppShell
              navbar={
                <Navbar width={{ base: 360 }} padding="xs">
                  <Navbar.Section mb={8}>
                    <NavButton to="/" leftIcon={<LightBulbIcon className={styles.classes.icon} />}>
                      Générateur
                    </NavButton>
                  </Navbar.Section>
                  <Navbar.Section mb={8}>
                    <NavButton
                      to="/list"
                      leftIcon={<ViewListIcon className={styles.classes.icon} />}
                    >
                      Liste
                    </NavButton>
                  </Navbar.Section>
                  <Navbar.Section>
                    <NavButton to="/add" leftIcon={<PlusIcon className={styles.classes.icon} />}>
                      Ajouter un nom
                    </NavButton>
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
