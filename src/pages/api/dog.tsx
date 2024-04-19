import { NextApiRequest, NextApiResponse } from 'next';
type Dog = {
    uid:string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    videoPath: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Dog[]>) {
    res.status(200).json([
        {
            uid:'121',
            src: '/dogs/Beagle.jpeg',
            alt: 'Beagle',
            width: 500,
            height: 500,
            description: 'This is the Description of a Beagle',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            uid:'122',
            src: '/dogs/BullDog.jpeg',
            alt: 'BullDog',
            width: 500,
            height: 500,
            description: 'This is the Description of a BullDog',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            uid:'123',
            src: '/dogs/DoberMan.jpeg',
            alt: 'DoberMan',
            width: 500,
            height: 500,
            description: 'This is the Description of a DoberMan',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            uid:'124',
            src: '/dogs/GoldenRetriever.jpeg',
            alt: 'GoldenRetriever',
            width: 500,
            height: 500,
            description: 'This is the Description of a GoldenRetriever',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            uid:'125',
            src: '/dogs/Husky.jpeg',
            alt: 'Husky',
            width: 500,
            height: 500,
            description: 'This is the Description of a Husky',
            videoPath: '/dogs/dogVideo.mp4'
        },
        {
            uid:'126',
            src: '/dogs/Rotweiler.jpeg',
            alt: 'Rotweiler',
            width: 500,
            height: 500,
            description: 'This is the Description of a Rotweiler',
            videoPath: '/dogs/dogVideo.mp4'
        }
    ]);
}
