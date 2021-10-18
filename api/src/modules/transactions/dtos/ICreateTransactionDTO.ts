export default interface ICreateTransactionDTO {
  type?: number;
  date?: Date;
  value?: number;
  cpf?: string;
  card?: string;
  hour?: string;
  owner?: string;
  name?: string;
}
