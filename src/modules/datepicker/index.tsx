import { TestDatepicker } from "./components/test-datepicker";

interface DatepickerRootProps {
  date: string;
  setDate: (newDate: string) => void;
}

export function DatepickerRoot({ date, setDate }: DatepickerRootProps) {
  return <TestDatepicker date={date} setDate={setDate} />;
}
