import { nanoid } from "nanoid";
import { ActionFunction, useActionData } from "remix";
import { Title } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import NameForm from "~/components/NameForm";
import { container } from "~/db.server";
import { useEffect } from "react";

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
    data: {
      value,
      type: String(type),
    },
  };
};

export default function Add() {
  const notifications = useNotifications();
  const actionData = useActionData();

  useEffect(() => {
    if (!actionData) {
      return;
    }

    const { data, status } = actionData;

    if (status === 200) {
      notifications.showNotification({
        message: data?.type === "0" ? "Prénom ajouté" : "Nom de famille ajouté",
        color: "green",
      });
    } else {
      notifications.showNotification({
        message: "Erreur lors de l'ajout du nom",
        color: "red",
      });
    }
  }, [actionData]);

  return (
    <div>
      <Title order={1} mb={8}>
        Ajouter des noms
      </Title>
      <NameForm />
    </div>
  );
}
