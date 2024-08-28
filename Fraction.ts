// Pablo Calderon Practica 1 Prog IV, dependencias instaladas, nodejs,Jest, tests corridos con Jets
export class Fraction {
  constructor(private numerator: number, private denominator = 1) {
    if (denominator === 0) {
      throw new Error("Denominator can't be 0");
    }
  }

  get values(): [number, number] {
    return [this.numerator, this.denominator];
  }

  // Maximo comun divisor
  private mcd(a: number, b: number): number {
    return b ? this.mcd(b, a % b) : a;
  }
  // Simplifica la fraccion
  simplify(): Fraction {
    const divisor = this.mcd(this.numerator, this.denominator);
    return new Fraction(this.numerator / divisor, this.denominator / divisor);
  }

  sum(other: Fraction | number): Fraction {
    return this.simplify();
  }
  subtract(other: Fraction): Fraction {
    return this.simplify();
  }
  multiply(other: Fraction): Fraction {
    return this.simplify();
  }
  divide(other: Fraction): Fraction {
    return this.simplify();
  }
  negative(): Fraction {
    return this;
  }
  inverse(): Fraction {
    [this.denominator, this.numerator] = [this.numerator, this.denominator];
    return this;
  }

  // Verify that two fractions are equal
  isEqual(other: Fraction): boolean {
    const simplifyThis = this.simplify();
    const simplifyOther = other.simplify();

    return (
      simplifyThis.numerator === simplifyOther.numerator &&
      simplifyThis.denominator === simplifyOther.denominator
    );
    // 1/2 === 2/4
  }
  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
}
