import Image from "next/image";

export default function Features() {
  return (
    <div className="mt-32">
      <h3 className="text-center text-3xl font-bold">Features</h3>
      <p className="text-center text-sm mb-4">
        Key Highlights of Our Extension
      </p>
      <div className="flex flex-col items-center md:flex-row mx-auto max-w-6xl px-4 gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-8 lg:gap-14">
          <div className="flex gap-2">
            <div>
              <img src="/Icon placeholder (2).png" alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Simple Screen Recording</h4>
              <p className="max-w-md">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img src="/Icon placeholder.png" alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Easy-to-Share URL</h4>
              <p className="max-w-md">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img src="/Icon placeholder (1).png" alt="" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Revisit Recordings</h4>
              <p className="max-w-md">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src="/Video Repository.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
