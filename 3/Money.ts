/** Types */
type Currency = "円" | "ドル" | "ユーロ";

/** Constants */
const MIN_MONEY_AMOUNT = 0;

/**
 * お金
 */
class Money {
  /**
   * Property
   */
  private readonly amount: number;
  private readonly currency: Currency;

  /**
   * Constructor
   */
  constructor(amount: number, currency: Currency) {
    // 読みづらくなったのでvalidationする部分をメソッドに分けた
    this.valid(amount, currency);

    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Methods
   */
  valid(amount: number, currency: Currency) {
    if (amount < MIN_MONEY_AMOUNT) {
      throw new Error("0以上を指定してください");
    }

    if (currency === null) {
      throw new Error("通貨の単位を指定してください");
    }
  }

  // NOTE: お金の四則演算で共通して使うvalidate
  private caluculateValid(money: Money) {
    if (this.currency !== money.currency) {
      throw new Error("通貨の単位を揃えてください");
    }
  }

  /**
   * お金の足し算
   */
  add(money: Money): Money {
    this.caluculateValid(money);

    const added = money.amount + this.amount;

    return new Money(added, this.currency);
  }
}
