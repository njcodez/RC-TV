import Header from './_components/Header';
import Main from './_components/Main';

export default function Home() {
  return (
    <div className="bg-cover bg-fixed bg-center min-h-screen" style={{ backgroundImage: "url('/header.png')" }}>
      <Header />
      <Main />
    </div>
  );
}
