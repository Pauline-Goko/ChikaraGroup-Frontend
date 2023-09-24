import Image from 'next/image'
import CarbonAvoided from './carbonChart/page'
import CarbonEmitted from './limitChart/page'


export default function Home() {
  return (
    <div>
    <CarbonEmitted />
    <CarbonAvoided />
   
   
    </div>
   
    
  )
}
