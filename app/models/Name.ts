/**
 * Represents a name.
 * @prop {string} value The name's value.
 * @prop {number} type 0 when it's a first name, 1 when it's a last name.
 */
interface Name {
  value: string;
  type: 0 | 1;
}

export default Name;
