import Logo from "../Icons/Logo";
import Geor from './Geor/Geor';
import GeorIa from "./GeorIA/GeorIa";
import GeorService from "./GeorServices/ES/GeorService";

interface LogoGeorProps {
  type?: 'complete' | 'service' | 'ia'
  service?: 'accountants'
}

export default function LogoGeor(logoGeorProps: LogoGeorProps) {

  const { type = 'complete', service = 'accountants' } = logoGeorProps;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-[6px]">
        <Logo width={32} height={32}/>
        { type !== 'ia' && <Geor /> }
        { type === 'ia' && <GeorIa /> }
      </div>
      { type === 'service' && <GeorService service={service}/> }
    </div>
  )
}