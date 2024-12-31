import Adsive from "@/components/enrollment-information/advise"
import EducationSystem from "@/components/enrollment-information/education-system"
import PreschoolLevel from "@/components/enrollment-information/preschool-level"
import ProgramEducation from "@/components/enrollment-information/program-education"

export default function Enrollment() {
  return (
    <div>
      <EducationSystem />
      <ProgramEducation />
      <PreschoolLevel />
      <Adsive />
    </div>
  )
}
