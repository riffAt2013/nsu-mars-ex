import Head from "next/head";
import Carousel from "/components/carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to NSU Mars Ex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* carousel */}
      <div>
        <Carousel />
      </div>

      {/* about */}
      <div
        id="about"
        className="mt-10 py-3 bg-amber-800 rounded-xl w-3/4 px-6 mx-auto"
      >
        <p className="text-center text-white text-base md:text-xl">
          We are a group of students who are passionate about Robotics and
          Artificial Intellingence and share a common love for building space
          rover. Founded in 2019, NSU Mars-Ex is the leading rover building team
          of North South University.
        </p>
      </div>
      {/* sponsor section */}
      <div id="sponsors" className="py-10">
        <p className="text-center text-xl">Sponsor Bar here</p>
      </div>

      {/* contact us section */}
      <p className="text-center text-xl pb-3">Find us here</p>
      <div className="pb-10 flex flex-row justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1063.7716656819332!2d90.4263015280892!3d23.814817995646635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2af70205eb36eb58!2zMjPCsDQ4JzU0LjMiTiA5MMKwMjUnMzQuNSJF!5e0!3m2!1sen!2sbd!4v1649186792356!5m2!1sen!2sbd"
          width="500"
          height="450"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
