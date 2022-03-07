import { useRouter } from "next/router";

export default function Member() {
  const router = useRouter();
  return (
    <>
      <p>Hello World from the pageName: {router.query.member} </p>
    </>
  );
}
