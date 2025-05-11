import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Section hero */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center mb-10 p-5">
          {/* Description */}
          <div className="flex flex-col flex-1 items-center gap-4 p-10 animate-fade animate-once">
            <div className="flex max-w-md">
              <h1 className="text-5xl/13 text-primary font-medium">Bersama Hadapi Diskriminasi</h1>
            </div>
            <div className="flex flex-col max-w-md gap-4">
              <p className="text-tertiary text-lg">Kami percaya bahwa setiap orang berhak hidup tanpa rasa takut, stigma, dan perlakuan tidak adil. Melalui edukasi, dukungan psikologis, dan ruang aman untuk berbagi.</p>
              <div>
                <Button className="text-white rounded-3xl text-lg p-6">Hubungi Kami</Button>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex p-10 flex-1 items-center justify-center animate-fade animate-once">
            <Image src="/hero.png" alt="hero" width={450} height={450} />
          </div>
        </div>

        {/* Section row 1 */}
        <div className="w-full grid gap -10 grid-cols-1 md:grid-cols-2 justify-center bg-secondary mt-10 p-3 ">
          {/* Image */}
          <div className="flex p-5 pt-10 pb-10 flex-1 justify-center animate-fade-left animate-once">
            <Image src="/row2.png" alt="hero" width={450} height={450} />
          </div>
          {/* Description */}
          <div className="flex flex-col flex-1 items-start gap-4 p-10 animate-fade-left animate-once">
            <div className="flex max-w-lg">
              <h1 className="text-4xl text-primary font-medium">Siapa Kami?</h1>
            </div>
            <div className="flex flex-col max-w-md gap-4">
              <p className="text-tertiary text-md">Anti.diskriminasi merupakan platform yang berkomitmen penuh untuk merangkul dan mendukung proses pemulihan korban-korban diskriminasi. Kami disini selalu ada untuk kalian.</p>
            </div>
          </div>
        </div>

        {/* Section row 2 */}
        <div className="flex flex-col mt-10 p-3 w-full">
          <div className="flex justify-center animate-fade-up animate-once">
            <h1 className="text-4xl text-primary font-medium ">Mengapa Kami Penting?</h1>
          </div>
          <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-2 md:grid-rows-2 place-items-center mt-10">
            {/* Grid Item 1 */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 animate-fade-up animate-once">
              <Image src="/row3-1.png" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">1. Fokus pada Dampak Psikologis</h1>
                <p className="text-tertiary text-md">Kami tidak hanya membahas diskriminasi secara umum, tetapi juga menyoroti dampaknya terhadap kesehatan mental—sesuatu yang sering terabaikan dalam percakapan publik.</p>
              </div>
            </div>

            {/* Grid Item 2 */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 animate-fade-up animate-once">
              <Image src="/row3-2.png" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">2. Menyediakan Dukungan dan Edukasi</h1>
                <p className="text-tertiary text-md">Kami hadir dengan konten edukatif, konsultasi, dan ruang berbagi cerita untuk membantu individu memahami, mengatasi, dan melawan diskriminasi secara sehat.</p>
              </div>
            </div>

            {/* Grid Item 3 */}
            <div className="flex flex-col items-center max-w-lg relative left-0 md:left-[50%] text-center gap-6 animate-fade-up animate-once">
              <Image src="/row3-3.png" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">3. Menjadi Ruang Aman dan Inklusif</h1>
                <p className="text-tertiary text-md">Kami membangun komunitas yang terbuka, empatik, dan bebas stigma—tempat setiap suara didengar dan setiap pengalaman dihargai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
