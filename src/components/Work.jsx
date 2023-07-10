import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 Years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aperiam repellat at? Deleniti accusantium earum, velit incidunt itaque provident obcaecati impedit quo, quibusdam, blanditiis vel odio aut aspernatur quia!'
    },
    {
        year: 2017,
        title: 'Expedia',
        duration: '3 Years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aperiam repellat at? Deleniti accusantium earum, velit incidunt itaque provident obcaecati impedit quo, quibusdam, blanditiis vel odio aut aspernatur quia!'
    },
    {
        year: 2015,
        title: 'Qualcomm',
        duration: '2 Years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aperiam repellat at? Deleniti accusantium earum, velit incidunt itaque provident obcaecati impedit quo, quibusdam, blanditiis vel odio aut aspernatur quia!'
    },
    {
        year: 2012,
        title: 'Bloomberg',
        duration: '3 Years',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aperiam repellat at? Deleniti accusantium earum, velit incidunt itaque provident obcaecati impedit quo, quibusdam, blanditiis vel odio aut aspernatur quia!'
    },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1020px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center'>Work</h1>
        {data.map((item, idx) => 
            <WorkItem key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
             />
        )}
    </div>
  )
}

export default Work