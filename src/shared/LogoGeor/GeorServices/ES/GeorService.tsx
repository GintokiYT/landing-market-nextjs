import { GeorServices as Service } from "@/types"

import Accountants from "./Accountants/Accountants";

interface GeorServiceProps {
  service?: Service
}

export default function GeorService(georServiceProps: GeorServiceProps) {

  const { service = 'accountants' } = georServiceProps;

  return (
    <>
      { service === 'accountants' && <Accountants /> }
    </>
  )
}