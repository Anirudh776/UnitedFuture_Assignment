import Link from 'next/link';

export default function SidebarItem({ animal, onClick, isSelected }) {
    const baseStyle = 'bg-blue-500 hover:scale-110 transition duration-300 ease-out text-white font-bold py-3 px-3 rounded block flex-1 mt-5'
    const selectedStyle = isSelected ? 'bg-gray-300' : '';
    return (
        <button
        className={`${baseStyle} ${selectedStyle}`}
        onClick={(e) => {
            e.preventDefault();
            onClick(animal);
        }}
        >{animal}</button>
    );
}
