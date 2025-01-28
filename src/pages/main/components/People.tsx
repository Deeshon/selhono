export default function People({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white w-[30%] justify-center p-12 rounded-2xl">
      <div className="flex w-[100%]">
        <div className={`people-bg-image  rounded-full`}></div>
        <div className="text-left pl-4">
          <ul>
            <li className="font-bold">{name}</li>
            <li className="jost-regular">{location}</li>
          </ul>
        </div>
      </div>
      <div className="text-left pt-4 jost-regular">
        <p>
          Lorem Ipsum is silly dummy text of the typesetting industry Ipsum has
          been is silly dummy text of the typesetting industry Ipsum has
          been
        </p>
      </div>
    </div>
  );
}
