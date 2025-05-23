export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-gmarket text-4xl font-bold mb-6">
        Welcome to DDUG DDAG LAB
      </h1>
      <p className="text-lg mb-4">
        This is a sample page demonstrating our custom fonts and colors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-blue-1000 text-white">
          <h2 className="font-gmarket text-2xl font-bold mb-4">
            Primary Color
          </h2>
          <p>This section uses our primary color (#140547)</p>
        </div>
        <div className="p-6 rounded-lg bg-blue-500 text-white">
          <h2 className="font-gmarket text-2xl font-bold mb-4">
            Secondary Color
          </h2>
          <p>This section uses our secondary color (#3e8fff)</p>
        </div>
      </div>
    </div>
  );
}
