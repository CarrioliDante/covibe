import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700">
        This is a simple Next.js application.
      </p>
      <Button>Click me</Button>
      use
    </div>
  );
};

export default Page;
