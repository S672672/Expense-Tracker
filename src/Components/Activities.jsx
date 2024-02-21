import React from 'react';

export default function Activities({ doneActivity, timeAgo }) {
    return (
        <div className="flex items-center gap-3 mb-2">
            <div className='bg-green-400 h-10 w-10 rounded-full'></div>
            <div className='flex gap-1 items-center justify-center'>
                <p className="font-bold text-xl">{doneActivity}</p>
                <p className="text-sm text-gray-500 m-2 mt-3">{timeAgo}</p>
            </div>
        </div>
    );
}
