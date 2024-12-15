import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="container space-y-4">
        <h1 className="text-3xl font-bold text-center">
          Welcome to NextJS 15 Boilerplate
        </h1>
        <p className="text-lg font-medium text-center">
          Use this boilerplate to start your next project with NextJS 15,
          include tools for linting, testing, logging, and more.
        </p>
        <Counter />
      </div>
    </div>
  );
}
