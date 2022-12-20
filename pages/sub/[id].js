import { useRouter } from "next/router";
export default function SubID() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <>
      <h1>/pages/sub/[id].js</h1>
      <p>Parameter : {id} </p>
      <a href="/">/pages/index.js</a>
    </>
  );
}
