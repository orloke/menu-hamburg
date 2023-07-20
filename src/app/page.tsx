import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      Navegue pelo site e veja essas cidades incríveis!
      <Link href='solutions'>solution</Link>
      <Link href='contact'>contato</Link>
    </main>
  );
}
