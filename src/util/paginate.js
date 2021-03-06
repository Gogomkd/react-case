import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value(); /* converting regular array to lodash obj
  channeling methods like slice take then with value returning it to normal array*/
  //_.slice(items, startIndex);
}

export default paginate;
