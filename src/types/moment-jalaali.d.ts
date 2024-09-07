// declare module 'moment-jalaali' {
//     import * as moment from 'moment';
//
//     // Define the interface for Moment with Jalali-specific methods
//     interface MomentJalaali extends moment.Moment {
//         jYear(): number;
//         jMonth(): number;
//         jDate(): number;
//         jDaysInMonth(): number;
//         jAdd(amount: number, unit: string): MomentJalaali;
//         jSubtract(amount: number, unit: string): MomentJalaali;
//         startOf(unit: string): MomentJalaali;
//         endOf(unit: string): MomentJalaali;
//     }
//
//     // Define the jMoment function that returns a MomentJalaali instance
//     function jMoment(
//         input?: moment.MomentInput,
//         format?: moment.MomentFormatSpecification,
//         strict?: boolean
//     ): MomentJalaali;
//
//     // Declare the loadPersian function as a static method on jMoment
//     namespace jMoment {
//         function loadPersian(options?: { dialect?: string; usePersianDigits?: boolean }): void;
//     }
//
//     // Export jMoment as the default export
//     export = jMoment;
// }
