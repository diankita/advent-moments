import CalendarForm from "@/app/ui/edit/calendar-form";
import CalendarList from "../ui/edit/calendar-list";

export default function Page () {
  return (
    <div>
      <h1>Set up your advent calendar</h1>

      <CalendarForm />
      <CalendarList />
    </div>
  );
  
}
