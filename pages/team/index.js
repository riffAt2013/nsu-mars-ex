import Card from "../../components/card";

export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam fuga
            temporibus est ut praesentium nihil qui nisi, quod quibusdam in,
            eaque tempora perferendis deserunt repellendus rem. Obcaecati
            officiis sequi facilis?
          </p>
        </div>

        <div className="flex flex-wrap ">
          <Card
            imageURL="/teammem/afnan-min.jpg"
            name="Khan Afnan Rahad"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/shoumik-min.jpg"
            name="Shoumik Mahbub Ridoy"
            title="Team Co-Lead"
          />
          <Card
            imageURL="/teammem/monsur-min.jpg"
            name="Monsur Hillas"
            title="Team Co-Lead"
          />
          <Card
            imageURL="/teammem/riad-min.jpg"
            name="Abdullah Riyad"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/zia-min.jpg"
            name="Muhammad Zia"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/rifat-min.jpg"
            name="Rifat Masud"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/nirob-min.jpg"
            name="Nirob Hasan"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/indra-min.jpg"
            name="Indra Prosad Roy"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/ornob-min.png"
            name="Azfar Shams"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/rasheeq-min.jpg"
            name="Rasheeq Ishmam"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/sanzar-min.jpg"
            name="Sanzar"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/orofa-min.jpg"
            name="Talha Orofa Zubayer"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/fabiha-min.jpg"
            name="Fabia Rahman Efa"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/nafis-min.jpg"
            name="Nafis Tanzim"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/talha-min.jpg"
            name="Talha Zunayeed"
            title="Team Lead"
          />
          <Card
            imageURL="/teammem/tonmoy-min.jpg"
            name="Shahriar Alam Tonmoy"
            title="Team Lead"
          />
        </div>
      </div>
    </section>
  );
}
