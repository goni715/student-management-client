"use client";
import { events } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <>
            <div className="bg-white p-4 rounded-md">
              <Calendar onChange={onChange} value={value} />
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" alt="more_dark" width={20} height={20} />
              </div>
              <div className="flex flex-col gap-4">
                {events?.map((item, i)=> (
                    <div 
                      key={i}
                      className="p-5 border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple rounded-md"
                    >
                        <div className="flex items-center justify-between">
                           <h1 className="font-semibold text-gray-600"> {item.title}</h1>
                           <span className="text-gray-300 text-xs">{item.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                    </div>
                ))}
              </div>
            </div>
        </>
    );
};

export default EventCalendar;