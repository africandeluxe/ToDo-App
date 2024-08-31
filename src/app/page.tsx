import Header from "@/components/Header";
import USPS from "@/components/USPs";
import TaskList from "@/components/TaskList"
import NewTask from "@/components/NewTask";

export default function Home() {
  return (
    <>
    <Header />
    <USPS />
    <TaskList />
    <NewTask/>
    
    </>
  );
}