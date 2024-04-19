import { NextApiRequest, NextApiResponse } from 'next';

type Horse = {
    uid:string;
    src: string;
    alt: string;
    width: number;
    height: number;
    description: string;
    videoPath: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Horse[]>) {
    res.status(200).json([
        {
            uid:'131',
            src: '/horses/AmericanPaintHorse.jpeg',
            alt: 'AmericanPaintHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the AmericanPaintHorse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            uid:'132',
            src: '/horses/AppaloosaHorse.jpeg',
            alt: 'AppaloosaHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the AppaloosaHorse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            uid:'133',
            src: '/horses/ArabianHorse.jpeg',
            alt: 'ArabianHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the ArabianHorse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            uid:'134',
            src: '/horses/BretonHorse.jpeg',
            alt: 'BretonHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the BretonHorse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            uid:'135',
            src: '/horses/FriesianHorse.jpeg',
            alt: 'FriesianHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the FriesianHorse',
            videoPath: '/horses/horseVideo.mp4'
        },
        {
            uid:'136',
            src: '/horses/MustangHorse.jpeg',
            alt: 'MustangHorse',
            width: 500,
            height: 500,
            description: 'This is the Description of the MustangHorse',
            videoPath: '/horses/horseVideo.mp4'
        }
    ]);
}
