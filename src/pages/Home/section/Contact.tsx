import Button from "../../../components/ui/Button"

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:px-24 px-16">
      <div className="md:w-1/2">
      <h1 className="text-5xl font-bold mb-4 uppercase">Contact Us</h1>
      <p className="mb-4 text-[20px]">Jangan ragu untuk menghubungi kami. Kami siap melayani <br />dan membantu anda dengan sepenuh hati.</p>
      <p className="my-8 text-[20px]">Feel free to reach out for collaborations, or consultation. <br />Send us an email at <br />hmse-pwt.telkomuniversity.ac.id</p>
      <p className="my-8 text-[20px]">Prefer a quick response? <br />Send us a message via WhatsApp <br />+62 853-8578-2684</p>
      </div>
      <div className="md:w-1/2">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nama</label>
            <input type="text" id="name" className="w-full px-3 py-2 border-0 outline-0 border-b" placeholder="Masukkan nama Anda" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border-0 outline-0 border-b" placeholder="Masukkan email Anda" />            
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Pesan</label>
            <input id="message" className="w-full px-3 py-2 border-0 outline-0 border-b" placeholder="Masukkan pesan Anda"/>
          </div>
          <Button text="submit"/>
        </form>
      </div>
    </div>
  )
}
