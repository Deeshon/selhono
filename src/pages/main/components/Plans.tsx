import { FaArrowRight } from "react-icons/fa";

export default function Plans({ title }: { title: string }) {
  return (
    <div className="p-10">
      <ul>
        <li className="text-lg font-bold">{title}</li>
        <li className="pt-2 jost-regular">
          <p>There are many variations of the</p>
          <p>passages of the lorem Ipsum from</p>
          <p>available, majority</p>
        </li>
        <li className="pt-8 font-semibold flex justify-center items-center">
          <p>Read More</p>
          <FaArrowRight className="ml-4" />
        </li>
      </ul>
    </div>
  );
}
