const commits = ['24/7 customer support', 'A clear refund policy', 'Real-time order tracking', 'Safe and secure payment methods']

const Commitment = () => {
  return (
    <ul className='flex justify-around gap-4'>
        {commits.map((i, idx) => (
            <li key={idx} className='bg-secondary flex justify-center items-center py-4 px-6 rounded-2xl group hover:bg-primary transition duration-300' >
                <p className='text-background text-center group-hover:text-secondary transition duration-300'>{i}</p>
            </li>
        ))}
    </ul>
  )
}

export default Commitment