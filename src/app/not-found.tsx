import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl max-w-2xl rounded-3xl p-8 md:p-12 w-full text-center space-y-8">
        {/* کد ۴۰۴ */}
        <div className="text-6xl font-extrabold text-red-500">۴۰۴</div>

        {/* عنوان و متن */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          صفحه‌ای که دنبالش هستی پیدا نشد
        </h1>
        <p className="text-gray-500 text-lg">
          شاید آدرس اشتباهه، یا صفحه حذف شده. برگرد به خونه 👇
        </p>

        {/* دکمه برگشت */}
        <Link href="/">
          <button className="mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 transition text-white rounded-xl text-base font-semibold shadow-lg cursor-pointer">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </div>
  );
}
