import Image from 'next/image'

export default function StatisticsSection() {
  return (
    <section className="relative py-16">
      <Image
        src="/stats.png?height=468&width=1700&text=Background+Image"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full brightness-50" />
        
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
       <Image
        src={"/st.png"}
        alt='icon'
        width={1319}
        height={247}
       />
        </div>
      </div>
    </section>
  )
}

