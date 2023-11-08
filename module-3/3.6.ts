{
  {
    //!!! Getter and setter

    class BankAccount {
      readonly id: number;
      name: string;
      protected _balance: number;

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }

      //   addDeposit(amount: number) {
      //     this._balance += amount;
      //   }

      //   getBalance() {
      //     return this._balance;
      //   }
      //! setter

      set deposit(amount: number) {
        this._balance += amount;
      }

      //! Getter
      get balance() {
        return this._balance;
      }
    }

    const goribManuserAccount = new BankAccount(4545, "Mr. Gorib", 20);
    // goribManuserAccount.addDeposit(300); // function call korte hocce
    // const myBalance = goribManuserAccount.getBalance(); // function call korte hocce

    goribManuserAccount.deposit = 330
    const myBalance = goribManuserAccount.balance; // property er moto kore
    console.log(myBalance);
  }
}
