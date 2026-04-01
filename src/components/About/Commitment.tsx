import { commits } from "@/constant/about.constants"


const Commitment = () => {
  return (
    <ul className='flex flex-wrap justify-around gap-4'>
        {commits.map((i, idx) => (
            <li key={idx} className='bg-secondary flex justify-center items-center py-4 px-6 rounded-2xl group hover:bg-primary transition duration-300' >
                <p className='text-background text-center group-hover:text-secondary transition duration-300'>{i}</p>
            </li>
        ))}
    </ul>
  )
}

export default Commitment