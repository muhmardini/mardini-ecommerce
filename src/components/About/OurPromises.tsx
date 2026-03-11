const Promises = ['High Quality', 'Modern Design', 'Long-lasting Performance', 'Safe Materials', 'Great value for the price']

const OurPromises = () => {
  return (
    <ul className='flex flex-wrap justify-center gap-4 w-1/2'>
        {Promises.map((i, idx) => (
          <li key={idx} className='bg-secondary px-8 py-3 rounded-4xl group hover:bg-primary transition duration-300'>
            <p className='text-background group-hover:text-secondary transition duration-300'>{i}</p>
          </li>
        ))}
    </ul>
  )
}

export default OurPromises