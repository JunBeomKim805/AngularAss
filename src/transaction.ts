export class transaction {
  id?: string;
  sender?: object;
  recipient?: object;
  currencyCd?: string;
  comments?: string;
  status?: string;
  date?: string;
}
export class filteredTransaction {
  id?: string;
  comments?: string;
  date?: string;
}
