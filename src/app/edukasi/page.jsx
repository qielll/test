import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Subhero */}
        <div className="flex w-full justify-center p-10 border-b border-[#AAAAAA]">
          <h1 className="text-4xl text-primary font-medium justify-center  ">Edukasi</h1>
        </div>

        {/* List video */}
        <div className="flex flex-col p-8 w-full ">
          <div className="w-full grid gap-10 grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 place-items-center mt-10 animate-fade animate-once">
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/Z5y0lHzcq1U?si=80tedS2owVzcjhdc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">UU Diskriminasi</h1>
              </div>
            </div>
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/Qgq2r7FOFUc?si=ovu4GGPVYjnfMETT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">Diskriminasi Disabilitas</h1>
              </div>
            </div>
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/qcxL2RP5pEk?si=duvC6rNesPGN6oSL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">Diskriminasi Perempuan</h1>
              </div>
            </div>
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/OzFD8mR0B_A?si=BqVCOwdAh0GzKSaG"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">Kesetaraan Gender</h1>
              </div>
            </div>
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/HWysu5f5G1M?si=ZIqViuaPpYNHE1Ym"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">Diskriminasi Ras</h1>
              </div>
            </div>
            {/* Youtube item */}
            <div className="flex flex-col items-center max-w-lg text-center gap-5">
              <iframe
                width="330"
                height="315"
                src="https://www.youtube.com/embed/_ThtXViQXuk?si=ZGfX8NdGarTLl1Zf"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-primary font-medium">Standar Norma Diskriminasi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
