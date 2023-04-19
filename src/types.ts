export interface IBankAccount {
  name: string
  iban: string
  amount: number
  createdAt: Date
  removeMoney(): void
}

export class BankAccount implements IBankAccount {
  constructor(
    public name: string,
    public iban: string,
    public amount: number,
    public createdAt: Date,
  ) {}

  removeMoney(): void {
    this.amount = 0
  }
}
