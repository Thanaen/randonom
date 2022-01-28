import { ActionFunction, Form, useActionData } from "remix";
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
      <h1>Bienvenue sur Randonom</h1>
      <p>
        Ici, vous pourrez générer des pseudos loufoques qui feront rire tous vos
        amis.
      </p>
      <hr />
      <h2>Générer un nom</h2>
      <Form method="post">
        <button type="submit">Générer un pseudo bizarroïde</button>
      </Form>
      {actionData && actionData.body && (
        <>
          <h3>Nom généré</h3>
          <span>{actionData.body}</span>
        </>
      )}
    </div>
  );
}
