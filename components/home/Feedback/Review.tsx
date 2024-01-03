import Image from 'next/image'
type Item = {
    title: string,
    description: string,
    price: number,
    category: string,
    img: string
}
  
type ReviewProps = {
    feedback: {
        username: string;
        item: Item;
        stars: number;
        review: string;
    };
};


export default function Review({ feedback }: ReviewProps) {
    return ( 
        <div className='w-64 my-11 mx-5 lg:m-7 lg:mt-12 p-6 md:flex place-content-start border-2 rounded-lg border-rich-bordeaux'>
        {/* <div className=' md:flex border-2 rounded-lg border-rich-bordeaux m-11 mb-0 '> */}
            <div className='w-52 p-6 m-auto md:m-0 md:pr-0'>
                <Image alt="item" src={feedback.item.img} width={400} height={400} className="border-2 border-rich-bordeaux mb-2" />
            
                 <h4 className="uppercase font-raleway font-bold text-sm ">{feedback.item.title}</h4>
                
            </div>
            <div className='p-6 font-raleway text-sm '>
                <div className='uppercase font-bold'>{feedback.username}</div>
                <div>Rate: {feedback.stars} / 5</div>
                <div>{feedback.review}</div>
            </div>
        </div>
        // <div className="">
        //     <Image alt="item" src={item.img} width={500} height={500} className="border-2 border-rich-bordeaux mb-2" />
        //     <div className="flex justify-between">
        //         <h4 className="uppercase font-raleway font-bold text-lg ">{item.title}</h4>
        //         <h4 className="uppercase font-raleway font-bold text-lg">{item.price}$</h4>
        //     </div>
        //     <div className="font-raleway text-sm"><b>CATEGORY:</b> {item.category}</div>
        //     <div className="font-raleway text-sm mt-2">{item.description}</div>
        // </div>
    )
}
