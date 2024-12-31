"use client"
import FormRegister from "./form-register"

const ModalSignupForConsultation = ({
  open,
  onClose,
}: {
  dict?: any
  open: boolean
  onClose: () => void
  isMobile?: boolean
}) => {
  return (
    <>
      <FormRegister open={open} onClose={onClose} />
    </>
  )
}

export default ModalSignupForConsultation
