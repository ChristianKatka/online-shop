export const deleteFromMap = (items: { [id: string]: any }, id: string) => {
  const spreadedItems = {
    ...items,
  };
  delete spreadedItems[id];

  return spreadedItems;
};
