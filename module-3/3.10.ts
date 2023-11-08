{
  //!!! encapsulation in OOP
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance += amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManuserAccount = new BankAccount(4545, "Mr. Gorib", 20);
  goribManuserAccount.addDeposit(300);

  const myBalance = goribManuserAccount.getBalance();
  console.log(myBalance);
}
