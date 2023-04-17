import { BankAccount } from './types'

export function findBy<T>(list: Array<T>, key: keyof T, value: string): T | undefined {
  return list.find(el => el[key] === value)
}

export function initBankTest() {
  const accounts: BankAccount[] = []
  // une autre maniere de declarer un tableau type
  const accounts2: Array<BankAccount> = []

  const bankAccount1 = new BankAccount('Edouard', 'FR001', 1000, new Date())
  const bankAccount2 = new BankAccount('Edouard Deux', 'FR002', 2000, new Date())

  accounts.push(bankAccount1)
  accounts.push(bankAccount2)

  const accountFound = findBy<BankAccount>(accounts, 'iban', 'FR001')

  console.log(accountFound)
}
