/**
 * @author Mohammad Amiri
 */
import moment from 'jalali-moment';


export class AsaDateClass {

  /**
   *
   *
   * @param date shamsi date string '2012-03-10T10:25:35'
   * @param from Gregorian date format default is 'YYYY-MM-DDThh:mm:ss'
   * @param to shamsi date format default is 'YYYY/M/D'
   *
   * @example gregorianToShamsi('2012/01/24' , 'YYYY/MM/DD' ,'YYYY/MM/DD')
   *
   * @return date string '1399/10/25'
   *
   */
  public static gregorianToShamsi(date: string, from: string = 'YYYY-MM-DDThh:mm:ss', to: string = 'YYYY/M/D'): string | any {
    try {
      if (date !== null) {
        const MomentDate = moment(date, from);
        if (MomentDate.isSame(MomentDate.clone())) {
          return MomentDate.locale('fa').format(to);
        } else {
        }
      }

    } catch (e) {
    }


  }

  /**
   *
   *
   * @param date Gregorian date string  example '1399/06/27'
   * @param from date format default value 'YYYY/MM/DD'
   * @param to date format defaulr value 'YYYY/MM/DD'
   *
   * @example  dateConvert('1367/11/04' , 'YYYY/MM/DD' ,'YYYY/MM/DD')
   *
   * @return '2020/05/12'
   *
   */
  public static shamsiToGregorian(date: string, from: string = 'YYYY/MM/DD', to: string = 'YYYY/MM/DD'): string | any {
    try {
      if (date !== null) {
        const MomentDate = moment.from(date, 'fa', from);
        if (MomentDate.isSame(MomentDate.clone())) {
          return MomentDate.format(to);
        } else {
        }
      }
    } catch (e) {
    }

  }

}
