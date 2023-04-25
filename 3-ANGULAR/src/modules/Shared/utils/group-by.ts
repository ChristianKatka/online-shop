export const groupBy = <T>(array: T[], key: string = 'id') =>
  array.reduce(
    (map, item: any) => ({ ...map, [item[key]]: item }),
    {} as { [key: string]: T }
  );
