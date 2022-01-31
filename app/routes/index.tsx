import { ActionFunction, Form, useActionData } from "remix";
import { Title, Text, Button } from "@mantine/core";
import { container } from "~/db.server";

// Query a random first name in the database
const AllFirstNamesQuery = "SELECT * FROM c WHERE c.type = 0";

// Query a random last name in the database
const AllLastNamesQuery = "SELECT * FROM c WHERE c.type = 1";

export const action: ActionFunction = async () => {
  const firstNames = (
    await container.items.query(AllFirstNamesQuery).fetchAll()
  ).resources;
  const lastNames = (await container.items.query(AllLastNamesQuery).fetchAll())
    .resources;

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return {
    status: 200,
    body: `${randomFirstName.value} ${randomLastName.value}`,
  };
};

export default function Index() {
  const actionData = useActionData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Title order={1}>Bienvenue sur Randonom</Title>
      <Text>
        Ici, vous pourrez générer des pseudos loufoques qui feront rire tous vos
        amis.
      </Text>
      <hr />
      <Title order={2}>Générer un nom</Title>
      <Form method="post">
        <Button type="submit">Générer un pseudo bizarroïde</Button>
      </Form>
      {actionData && actionData.body && (
        <>
          <Title order={3}>Nom généré</Title>
          <Text>{actionData.body}</Text>
        </>
      )}
    </div>
  );
}
