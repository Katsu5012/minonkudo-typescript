/** Constants */
const MIN_HP = 0;
const MAX_HP = 100;

// HP(ヒットポイント)を表現するクラス
class HitPoint {
  /** Property */
  private min: number = MIN_HP;
  private max: number = MAX_HP;
  private value: number;

  /** Constructor */
  constructor(hp: number) {
    if (hp < MIN_HP) {
      throw new Error(`HPは${MIN_HP}以上でなければいけません`);
    }

    if (hp > MAX_HP) {
      throw new Error(`HPは${MAX_HP}以下でなければいけません`);
    }

    this.value = hp;
  }
  /**
   * damageを受ける
   */
  damage(damageAmount: number): HitPoint {
    const damaged = this.value - damageAmount;
    const corrected = damaged < MIN_HP ? MIN_HP : damaged;

    return new HitPoint(corrected);
  }

  /**
   * 回復する
   */
  recover(recoverAmount: number) {
    const recovered = this.value + recoverAmount;
    // 左辺を変数にした方が人間理解しやすい的なことをリーダブルコードに書いていた気がするので入れ替えている
    const corrected = recovered > MAX_HP ? MAX_HP : recovered;

    return new HitPoint(corrected);
  }
}
