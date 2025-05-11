import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Subhero */}
        <div className="flex w-full justify-center p-10">
          <h1 className="text-4xl text-primary font-medium justify-center ">Tentang Kami</h1>
        </div>

        <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-2 justify-center bg-secondary p-3 animate-fade animate-once">
          {/* Image */}
          <div className="flex p-5 pt-10 pb-10 flex-1 justify-center ">
            <Image src="/row-about.png" alt="hero" width={450} height={450} />
          </div>
          {/* Description */}
          <div className="flex flex-col flex-1 items-start gap-4 p-10">
            <div className="flex max-w-lg">
              <h1 className="text-3xl text-primary font-medium">Visi</h1>
            </div>
            <div className="flex flex-col max-w-md gap-4">
              <p className="text-tertiary text-md">
                Menjadi platform digital terdepan dalam menciptakan masyarakat yang inklusif, setara, dan bebas dari segala bentuk diskriminasi. Dengan mengedepankan pendidikan, kesadaran sosial, dan pemberdayaan individu melalui akses
                informasi serta layanan konsultasi yang terpercaya, terbuka, dan humanis. Serta berkomitmen penuh untuk merangkul dan mendukung proses pemulihan korban-korban diskriminasi.
              </p>
            </div>
            <div className="flex max-w-lg">
              <h1 className="text-3xl text-primary font-medium">Misi</h1>
            </div>
            <div className="flex flex-col max-w-md gap-4">
              <p className="text-tertiary text-md">
                Menyediakan konten edukatif yang akurat, mudah dipahami, dan inklusif tentang berbagai bentuk diskriminasi, dengan pendekatan berbasis hak asasi manusia. Memberikan layanan konsultasi psikologis dan sosial yang aman,
                rahasia, dan empatik bagi individu atau komunitas yang terdampak diskriminasi. Mengembangkan inovasi digital yang interaktif, aksesibel, dan adaptif untuk memperluas jangkauan serta meningkatkan efektivitas edukasi dan
                layanan.
              </p>
            </div>
          </div>
        </div>

        {/* List Pengembang */}
        <div className="flex flex-col p-8 w-full mt-10 pb-20 animate-fade animate-once">
          <div className="flex justify-center flex-col gap-2 max-w-xl">
            <h1 className="text-4xl text-primary font-medium ">Profil Pengembang</h1>
            <p className="text-tertiary text-md">Tim kami berdedikasi untuk menyebarkan awareness tentang diskriminasi melalui media website dan membagikan yg kami pelajari dari perkuliahan</p>
          </div>
          <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-3 place-items-center mt-10">
            {/* Pengembang 1 */}
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/tim1.png" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-primary font-medium">Octavia Dwi Hani S.</h1>
                <div className="flex flex-col">
                  <p className="text-tertiary text-md">Universitas Negeri Surabaya</p>
                  <p className="text-tertiary text-md">Mail: 24010014081@mhs.unesa.ac.id</p>
                </div>
              </div>
            </div>
            {/* Pengembang 2 */}
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/tim2.jpg" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-primary font-medium">Naaifah Zaahiroh</h1>
                <div className="flex flex-col">
                  <p className="text-tertiary text-md">Universitas Negeri Surabaya</p>
                  <p className="text-tertiary text-md">Mail: 24010014083@mhs.unesa.ac.id</p>
                </div>
              </div>
            </div>
            {/* Pengembang 3 */}
            <div className="flex flex-col items-center max-w-lg text-center gap-10">
              <Image src="/tim3.png" alt="hero" width={330} height={500} />
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-primary font-medium">Puti Rizka Wulandari</h1>
                <div className="flex flex-col">
                  <p className="text-tertiary text-md">Universitas Negeri Surabaya</p>
                  <p className="text-tertiary text-md">Mail: 24010014086@mhs.unesa.ac.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
