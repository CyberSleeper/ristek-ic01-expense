import CurrentExpenses from "./CurrentExpenses"
import ExpensesSection from "./ExpensesSection"
import Filters from "./Filters"
import { DashboardProvider } from "src/components/Context/DashboardContext"

export const DashboardModule: React.FC = () => {
  return (
    <>
    <DashboardProvider>
    <div className="flex">
      <section className="w-[65%]">
        <ExpensesSection />
      </section>
      <aside className="w-[35%] pl-8">
        <CurrentExpenses />
        <Filters />
      </aside>
    </div>
    </DashboardProvider>
    </>
  )
}