import { nanoid } from "nanoid";
import type { ActionFunction } from "remix";
import NameForm from "~/components/NameForm";
import { container } from "~/db.server";

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();

  const value = body.get("value");
  const type = Number(body.get("type"));

  if (!value || (type > 1 && type < 0)) {
    return {
      status: 400,
    };
  }

  await container.items.create({ value, type, nameId: nanoid() });

  return {
    status: 200,
  };
};

export default function Add() {
  return (
    <div>
      <h1>Ajouter des noms</h1>
      <NameForm />
    </div>
  );
}
