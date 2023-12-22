"use client"
import React from 'react'
import TitleBox from '../components/TitleBox'
import Review from './Review'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

type Item = {
  title: string,
  description: string,
  price: number,
  category: string,
  img: string

}
type FeedbackProps = {
  feedback: {
    username: string;
    item: Item;
    stars: number;
    review: string;
  }[];
};

export default function Feedback({ feedback }: FeedbackProps) {
  return (
    <section className="p-10 md:mx-20">
      <TitleBox text="FEEDBACK" />
      <Glider
        draggable
        hasArrows
        slidesToShow={1}
        responsive={[
          {
            breakpoint: 864,
            settings: {
              slidesToShow:2,
            },
          },
        ]}
        slidesToScroll={1}
      >
        {feedback?.map((review, index) => (
          <Review key={index} feedback={review} />
        ))}
      </Glider>
      {/* <div className='md:flex space-x-10'>
       

      </div>  */}
    </section>

  )
}
