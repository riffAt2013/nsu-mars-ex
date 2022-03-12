import Head from "next/head";
import Card from "../components/card";

export default function Society() {
  return (
    <>
      <Head>
        <title>Society Members</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR SOCIETY
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              fuga temporibus est ut praesentium nihil qui nisi, quod quibusdam
              in, eaque tempora perferendis deserunt repellendus rem. Obcaecati
              officiis sequi facilis?
            </p>
          </div>

          <div className="flex flex-wrap ">
            <Card
              imageURL="/societymem/adnan.jpg"
              name="Khan Afnan Rahad"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/amanullah.jpg"
              name="Shoumik Mahbub Ridoy"
              title="Team Co-Lead"
            />
            <Card
              imageURL="/societymem/asfaria.jpg"
              name="Monsur Hillas"
              title="Team Co-Lead"
            />
            <Card
              imageURL="/societymem/emul.png"
              name="Abdullah Riyad"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/farhan ferdous.jpg"
              name="Muhammad Zia"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/farhan.jpg"
              name="Rifat Masud"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/imtiaz.jpg"
              name="Nirob Hasan"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/joy.jpg"
              name="Indra Prosad Roy"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/maraj.jpg"
              name="Azfar Shams"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/mehedi.jpg"
              name="Rasheeq Ishmam"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/motiur.jpg"
              name="Sanzar"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/shafwan.jpg"
              name="Talha Orofa Zubayer"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/shakil.jpeg"
              name="Fabia Rahman Efa"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/shayam I.jpg"
              name="Nafis Tanzim"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/sinthea.jpg"
              name="Talha Zunayeed"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/sudipto.jpg"
              name="Shahriar Alam Tonmoy"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/sumaiya.jpg"
              name="Shahriar Alam Tonmoy"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/syed maher.jpg"
              name="Shahriar Alam Tonmoy"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/tasnim.jpeg"
              name="Shahriar Alam Tonmoy"
              title="Team Lead"
            />
            <Card
              imageURL="/societymem/tasnuba.jpeg"
              name="Shahriar Alam Tonmoy"
              title="Team Lead"
            />
          </div>
        </div>
      </section>
    </>
  );
}
