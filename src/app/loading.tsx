export default function Loading() {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-primaryDark">
      <div className="loader"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-3xl font-bold mb-20">در حال بارگزاری ...</h1>
        <p className="text-white text-lg">لطفا کمی صبر کنید</p>
      </div>
    </div>
  );
}
