import { Form } from "remix";
import { TextInput, NativeSelect, Button } from "@mantine/core";

export default function NameForm() {
  return (
    <Form action="/add" method="post">
      <TextInput defaultValue="" name="value" id="value" type="text" label="Valeur" mb={8} />
      <NativeSelect
        defaultValue="0"
        label="Type"
        name="type"
        id="type"
        required
        data={[
          { value: "0", label: "Prénom" },
          { value: "1", label: "Nom de famille" },
        ]}
        mb={8}
      />

      <Button type="submit">Ajouter</Button>
    </Form>
  );
}
