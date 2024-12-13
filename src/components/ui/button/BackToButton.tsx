import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

interface Props {
  path: string;
}

export const BackToButton = ({ path }: Props) => {
  return (
    <div className="w-auto self-start flex justify-center items-center gap-1">
      <Link href={path} className="flex justify-center items-center gap-1">
        <IoArrowBack className="w-[20px] h-[20px] dark:text-gray-200" />
        <p className="text-xl dark:text-gray-200">Back to</p>
      </Link>
    </div>
  );
};
