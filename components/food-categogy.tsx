import Image from 'next/image'

export default function WhyChooseUsSection() {
  return (
    <section className="bg-black py-16 min-h-screen">
      <div className="container mx-auto px-4">
      <Image 
      src={"/wcu.png"}
      alt='why choose us'
      width={1320}
      height={720}
      />
       
      </div>
    </section>
  )
}

