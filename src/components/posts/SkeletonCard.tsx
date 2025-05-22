// components/SkeletonPostBox.tsx

const SkeletonPostBox = () => {
  return (
    <div className="block max-w-72 w-full animate-pulse">
      <div className="post-box flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
        {/* تصویر اسکلتون */}
        <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

        {/* عنوان اسکلتون */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

        {/* خلاصه اسکلتون */}
        <div className="h-4 bg-gray-200 rounded w-full"></div>

        {/* تاریخ اسکلتون */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonPostBox;
