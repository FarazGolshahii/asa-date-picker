/**
 * @author Mohammad Amiri
 */
export class AsaDigitSeparatorClass {


  /**
   *  @param  digit your number
   *  @param separatorCharacter separator value default is ','
   *
   *  @example AsaDigitSeparatorClass.separator(1234567)  1,234,567
   *
   *  @return string with separator
   *
   *
   **/
  public static separator(digit: number, separatorCharacter: string = ','): string | any {
    try {
      return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorCharacter);
    } catch (e) {
    }
  }


}
