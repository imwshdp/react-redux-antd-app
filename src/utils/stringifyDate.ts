import { Dayjs } from "dayjs";

const stringifyDate = (date: Dayjs): string => {
  return date.format("YYYY.MM.DD")
}

export default stringifyDate;