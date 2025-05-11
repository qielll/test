import Navbar from "@/components/ui/navbar";
import Image from "next/image";

import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Subhero */}
        <div className="flex w-full justify-center p-10 border-b border-[#AAAAAA]">
          <h1 className="text-4xl text-primary font-medium justify-center ">Tentang Diskriminasi</h1>
        </div>

        {/* List diskriminasi */}
        <div className="flex flex-col p-8 w-full mb-12 animate-fade animate-once">
          <div className="flex justify-center flex-col gap-7 items-center">
            <h1 className="text-4xl text-primary font-medium ">Apa Itu Diskriminasi?</h1>
            <p className="text-tertiary max-w-3xl text-center text-md">
              Diskriminasi adalah perlakuan yang tidak adil atau tidak setara terhadap seseorang atau kelompok berdasarkan karakteristik seperti agama, suku, ras, etnis, jenis kelamin, ataupun status sosial. Hal ini dapat berupa perbedaan,
              pengecualian, pembatasan, atau tindakan yang merugikan secara langsung maupun tidak langsung.
            </p>
          </div>
          <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 place-items-center mt-10">
            {/* Item card */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 h-[400px]">
              <Image src="/diskriminasi1.jpg" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">1. Diskriminasi Rasisme</h1>
                <p className="text-tertiary text-md">
                  Diskriminasi Rasisme adalah perlakuan tidak adil atau tidak setara terhadap seseworang atau kelompok berdasarkan ras, etnis, atau warna kulit.  Ini dapat muncul dalam berbagai bentuk, seperti ujaran kebencian, stereotip
                  negatif
                </p>
              </div>
            </div>

            {/* Item card */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 h-[400px]">
              <Image src="/diskriminasi2.jpg" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">2.Diskriminasi Seksisme</h1>
                <p className="text-tertiary text-md">
                  Diskriminasi Seksisme adalah perlakuan tidak adil berdasarkan jenis kelamin atau gender seseorang, biasanya diskriminasi ini lebih merugikan perempuan, meskipun bisa juga terjadi pada laki-laki atau individu non-biner.
                  Bentuknya dapat berupa pelecehan seksual, stereotip gender
                </p>
              </div>
            </div>

            {/* Item card */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 h-[400px]">
              <Image src="/diskriminasi3.jpg" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">3. Diskriminasi Ageisme</h1>
                <p className="text-tertiary text-md">
                  Ageisme adalah prasangka atau diskriminasi terhadap seseorang berdasarkan usia mereka. Dapat dialami oleh orang lanjut usia (misalnya dianggap tidak produktif atau tidak mampu mengikuti perkembangan zaman) atau bahkan oleh
                  orang muda
                </p>
              </div>
            </div>

            {/* Item card */}
            <div className="flex flex-col items-center max-w-lg text-center gap-6 h-[400px]">
              <Image src="/diskriminasi4.jpg" alt="hero" width={300} height={300} />
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-primary font-medium">4. Diskriminasi Pada Penyandang Disabilitas</h1>
                <p className="text-tertiary text-md">
                  Diskriminasi pada penyandang disabilitas ini biasa terjadi ketika seseorang diperlakukan secara tidak adil karena memiliki disabilitas fisik, mental, intelektual, atau sensorik. Bentuk diskriminasi ini mencakup kurangnya
                  akses ke fasilitas publik, peluang kerja yang terbatas,
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Last row */}
        <div className="flex flex-col p-10 w-full bg-secondary items-start gap-5 animate-fade animate-once">
          <div className="flex justify-center flex-col gap-7">
            <h1 className="text-4xl text-primary font-medium ">Dampak Diskriminasi</h1>
          </div>
          <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 justify-center ">
            {/* Description */}
            <div className="flex flex-col flex-1 items-start gap-4 ">
              {/* List item */}
              <div className="flex flex-col gap-3">
                <div className="flex max-w-md">
                  <h1 className="text-xl text-primary font-medium">1. Dampak Psikologis dan Kesehatan Mental</h1>
                </div>
                <div className="flex flex-col max-w-md gap-4">
                  <p className="text-tertiary text-base">Korban akan mengalami diskriminasi yang dapat sangat mempengaruhi kesejahteraan psikologis seseorang.</p>
                </div>
              </div>

              {/* List item */}
              <div className="flex flex-col gap-3">
                <div className="flex max-w-md">
                  <h1 className="text-xl text-primary font-medium">2. Konflik Sosial dan Perpecahan</h1>
                </div>
                <div className="flex flex-col max-w-md gap-4">
                  <p className="text-tertiary text-base">Diskriminasi yang dibiarkan dapat memicu ketegangan dan konflik di masyarakat.</p>
                </div>
              </div>

              {/* List item */}
              <div className="flex flex-col gap-3">
                <div className="flex max-w-md">
                  <h1 className="text-xl text-primary font-medium">3. Pelanggaran Hak Asasi Manusia</h1>
                </div>
                <div className="flex flex-col max-w-md gap-4">
                  <p className="text-tertiary text-base">Anti.diskriminasi merupakan platform yang berkomitmen penuh untuk merangkul dan mendukung proses pemulihan korban-korban diskriminasi. Kami disini selalu ada untuk kalian.</p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="flex flex-1 justify-center">
              <Image src="/diskriminasi5.png" alt="hero" width={450} height={450} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
