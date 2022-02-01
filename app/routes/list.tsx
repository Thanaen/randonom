import { useLoaderData } from "remix";
import { Table } from "@mantine/core";
import { container } from "~/db.server";
import type Name from "~/models/Name";

export async function loader() {
  const { resources: names } = await container.items.query("SELECT * FROM c").fetchAll();

  const formattedNames = names.map(({ value, type }) => ({
    value: value,
    type: type,
  }));

  return formattedNames;
}

export default function List() {
  const data = useLoaderData() as Name[];

  return (
    <div>
      <h1>Liste des noms</h1>
      <Table>
        <thead>
          <tr>
            <td>Valeur</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ value, type }) => (
            <tr key={value}>
              <td>{value}</td>
              <td>{type === 0 ? "Prénom" : "Nom de famille"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
