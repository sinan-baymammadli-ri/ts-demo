import { factory, primaryKey } from "@mswjs/data";
import { datatype, lorem } from "faker";

export const db = factory({
  todo: {
    id: primaryKey(datatype.uuid),
    text: lorem.paragraph,
  },
});
