import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  return {
    props: context.query, // will be passed to the page component as props
  };
}

export default function Member(props) {
  const imageData = {
    afnan: "/teammem/afnan-min.jpg",
    ridoy: "/teammem/shoumik-min.jpg",
    monsur: "/teammem/monsur-min.jpg",
    riad: "/teammem/riad-min.jpg",
    zia: "/teammem/zia-min.jpg",
    rifat: "/teammem/rifat-min.jpg",
    nirob: "/teammem/nirob-min.jpg",
    indra: "/teammem/indra-min.jpg",
  };

  const router = useRouter();
  const imageSrc = imageData[router.query.member];
  return (
    <>
      <h1> Hello, {props.member}! </h1>
    </>
  );
}
