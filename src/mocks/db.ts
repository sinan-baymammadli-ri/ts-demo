import { factory, primaryKey } from "@mswjs/data";
import { datatype, lorem, name } from "faker";

export const db = factory({
  book: {
    id: primaryKey(datatype.uuid),
    title: lorem.words,
    author: name.findName,
  },
});
