import { Form } from "remix";

export default function NameForm() {
  return (
    <Form action="/add" method="post">
      <div>
        <label>
          Valeur: <input type="text" name="value" id="value" required />
        </label>
      </div>
      <div>
        <label>
          Type:{" "}
          <select name="type" id="type" required>
            <option value={0}>Prénom</option>
            <option value={1}>Nom de famille</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Ajouter</button>
      </div>
    </Form>
  );
}
