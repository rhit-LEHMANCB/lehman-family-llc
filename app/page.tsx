import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: "url('/house.webp')",
            backgroundSize: "cover",
          }}
        />
        
        {/* Overlay to slightly darken the image */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        
        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-between h-full pb-32">
          {/* Header/Logo Area */}
          <div className="w-full py-4 bg-black/30">
            <h1 className="text-4xl font-bold tracking-wider text-white text-center">
              LEHMAN FAMILY LLC
            </h1>
          </div>
          
          {/* Center Content
          <div className="flex flex-col items-center justify-center space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-light text-white text-center"
            >
              Insert Slogan Here
            </motion.h2>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold text-lg px-8 py-6 h-auto"
            >
              VIEW PROPERTIES
            </Button>
          </div> */}
        </div>
      </section>

      <section className="w-full bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-light pb-5">Our Work</h2>
          <div className="flex flex-row justify-center py-5"><div className="border-gray-400 border-b w-48" /></div>
        </div>
      </section>

      <section className="w-full bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-light pb-5">Our Team</h2>
          <div className="flex flex-row justify-center py-5"><div className="border-gray-400 border-b w-48" /></div>
          
        </div>
      </section>

      <section className="w-full bg-black text-white pt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-light">Contact Us</h2>
          <div className="flex flex-row justify-center py-5"><div className="border-gray-400 border-b w-48" /></div>
          <h3 className="text-xl ">
            Have questions?
          </h3>
          <div className="text-gray-400 p-5">
            <span>
              We're happy to help!
              Feel free to contact us at: <a href="mailto:info@lehmanfamilyllc.com">info@lehmanfamilyllc.com</a>.
            </span>
            <div>
              (812) 363-5149
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}