import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center mb-20">
          <img
            alt="team"
            className="rounded-full w-72 object-cover object-center mb-6"
            src={props.imageURL}
          />
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {props.name}
            </h2>
            <h3 className="text-gray-500 mb-3">{props.title}</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi
              fuga expedita. Minima beatae nisi, eveniet quod voluptatem porro
              accusantium.
            </p>

            <span className="inline-flex space-x-5">
              <div className="relative">
                <div className="w-7 h-7">
                  <a href="#">
                    <Image src="/facebook.png" alt="facebook" layout="fill" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="w-7 h-7 ">
                  <a href="#">
                    <Image src="/github.png" alt="facebook" layout="fill" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="w-7 h-7 ">
                  <a href="#">
                    <Image src="/mail.png" alt="facebook" layout="fill" />
                  </a>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
