type Reason = {
    id: number;
    title: string;
    paragraph: string;
}

const reasons: Reason[] = [
    {
        id: 1,
        title: 'Premium Quality',
        paragraph: 'We carefully evaluate every product before adding it to our collection.'
    },
    {
        id: 2,
        title: 'Fast & Reliable Shipping',
        paragraph: 'Your order is handled securely and delivered quickly.'
    },
    {
        id: 3,
        title: 'Secure Checkout',
        paragraph: 'Your payment information is encrypted and always protected.'
    },
    {
        id: 4,
        title: 'Customer First & Loyalty',
        paragraph: 'We are here to support you before and after your purchase, with the loyalty for our loyal customers'
    },
    {
        id: 5,
        title: 'Fair Pricing',
        paragraph: "Great quality shouldn't come with a high price tag"
    },
    {
        id: 6,
        title: 'Trusted by Hundreds of Customers',
        paragraph: 'We’re proud of our growing community of happy shoppers.'
    }
]

const ChooseUs = () => {
  return (
    <ul className='flex flex-col md:flex-row flex-wrap justify-around gap-x-2 gap-y-6 md:w-10/12'>
        {reasons.map(i => (
            <li key={i.id} className='bg-secondary md:w-1/3 py-8 px-4 flex flex-col gap-4 items-center rounded-2xl group hover:bg-primary transition duration-300' >
                <h3 className='text-primary text-center group-hover:text-secondary transition duration-300'>{i.title}</h3>
                <p className='text-background text-center group-hover:text-basic transition duration-300'>{i.paragraph}</p>
            </li>
        ))}
    </ul>
  )
}

export default ChooseUs