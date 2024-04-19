import { NextApiRequest, NextApiResponse } from 'next';

type Cat = {
    uid: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    videoPath: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Cat[]>) {
    res.status(200).json([
        {
            uid: '111',
            src: '/cats/AmericanShorthair.jpeg',
            alt: 'AmericanShorthair',
            width: 500,
            height: 500,
            description: 'This is the Description of an AmericanShorthair cat ',
            videoPath: '/cats/catVideo.mp4'
        },
        {
            uid: '112',
            src: '/cats/Birman.jpeg',
            alt: 'Birman',
            width: 500,
            height: 500,
            description: 'This is the Description of a Birman cat ',
            videoPath: '/cats/catVideo.mp4'
        },
        {
            uid: '113',
            src: '/cats/BritishShortHair.jpeg',
            alt: 'BritishShortHair',
            width: 500,
            height: 500,
            description: 'This is the Description of a BritishShortHair cat',
            videoPath: '/cats/catVideo.mp4'
        },
        {
            uid: '114',
            src: '/cats/MaineCoon.png',
            alt: 'MaineCoon',
            width: 500,
            height: 500,
            description: 'This is the Description of a MaineCoon Cat',
            videoPath: '/cats/catVideo.mp4'
        },
        {
            uid: '115',
            src: '/cats/Persian.jpeg',
            alt: 'Persian',
            width: 500,
            height: 500,
            description: 'This is the Description of a Persian cat',
            videoPath: '/cats/catVideo.mp4'
        },
        {
            uid: '116',
            src: '/cats/Siamese.jpeg',
            alt: 'Siamese',
            width: 500,
            height: 500,
            description: 'This is the Description of a Siamese cat',
            videoPath: '/cats/catVideo.mp4'
        }
    ]);
}
