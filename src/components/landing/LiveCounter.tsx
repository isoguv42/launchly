
interface LiveCounterProps {
  userCount: number;
}

export const LiveCounter = ({ userCount }: LiveCounterProps) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="bg-gray-800/50 rounded-2xl p-8 max-w-md mx-auto border border-gray-700">
          <p className="text-3xl font-bold text-blue-400 mb-2">
            🔥 {userCount.toLocaleString()} founders and counting... You're next.
          </p>
        </div>
      </div>
    </section>
  );
};
