// lib/date-utils.ts
import moment from "jalali-moment";

export function convertIsoToPersianDate(isoString: string) {
  return moment(isoString).locale("fa").format(" DD MMMM  YYYY");
}
