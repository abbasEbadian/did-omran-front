import React from "react";

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-right leading-loose">
    <h1 className="text-3xl font-bold text-center mb-8">قوانین و مقررات دیدعمران</h1>

    <div className="bg-white p-4 rounded-xl mb-8 shadow-custom-shadow ">
      <p className="font-semibold">سلام مهندسین عزیز، بهتون تبریک میگم!</p>
      <p className="mt-2">
        تبریک می‌گم که روی مهارت و آینده خودتون سرمایه‌گذاری می‌کنید. اگر الان اینجا هستید، یعنی از بقیه مهندسین جلوتر هستید و قراره فاصله خودتون رو بیشتر کنید.
      </p>
      <p className="text-sm text-secondary mt-4">
        اگر سوال موردنظرتان در این صفحه پاسخ داده نشده بود، تیم پشتیبانی از شنبه تا چهارشنبه از ساعت ۸ الی ۱۷ و پنج‌شنبه‌ها از ساعت ۸ الی ۱۴، به جز روزهای تعطیل، با شماره تماس <strong>02144348507</strong> و یا از طریق ارسال تیکت در بخش پشتیبانی، پاسخگوی شما عزیزان خواهد بود. در صورتی که خارج از این ساعات پیام ارسال کردید، لطفاً صبور باشید تا در اولین روز کاری بررسی و پاسخ داده شود.
      </p>
    </div>

    <section className="mb-10 border-dashed border-t-2 border-t-secondary700 pt-3">
      <h2 className="text-xl font-bold mb-4">قوانین پشتیبانی علمی</h2>
      <ul className="list-disc pr-5 space-y-2 text-secondary800 marker:transition-all marker:duration-200">
        <li className="hover:marker:text-did hover:text-dark">
          پس از تهیه دوره‌های جامع مجازی و تمرین مباحث، سوالات علمی‌تان را می‌توانید در گروه‌های تلگرامی که با حضور مدرسین و پشتیبان‌های علمی هستند، بپرسید. این پشتیبانی فقط برای دوره‌های دیدجامع است.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          پشتیبانی علمی آزمون‌های نظام مهندسی برای ۵ نوبت آزمون، در یک گروه تلگرامی با حضور ۴ پشتیبان علمی انجام می‌شود.
        </li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">قوانین آپدیت علمی</h2>
      <ul className="list-disc pr-5 space-y-2 text-secondary800 marker:transition-all marker:duration-200">
        <li className="hover:marker:text-did hover:text-dark">
          آپدیت مطالب اصلاحی تا ۵ آزمون نظام مهندسی یا ۵ سال برای نرم‌افزارها، رایگان خواهد بود.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          مطالب تکمیلی یا جدید با پرداخت مابه‌التفاوت ارائه می‌شود.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          نسخه‌های چاپی دوره تنها یکبار ارسال و شامل آپدیت رایگان نمی‌باشند.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          جابجایی سریال فعال‌سازی فقط یکبار و با پرداخت هزینه ممکن است (در سال ۱۴۰۳ معادل ۳۰۰ هزار تومان).
        </li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">قوانین خرید اقساطی</h2>
      <ul className="list-disc pr-5 space-y-2 text-secondary800 marker:transition-all marker:duration-200">
        <li className="hover:marker:text-did hover:text-dark">قابل استفاده فقط برای دوره‌های دیدجامع است.</li>
        <li className="hover:marker:text-did hover:text-dark">در خرید دو قسطی کل دوره بلافاصله ارسال می‌شود.</li>
        <li className="hover:marker:text-did hover:text-dark">تا ۴۸ ساعت پس از موعد مقرر مهلت پرداخت قسط دوم دارید.</li>
        <li className="hover:marker:text-did hover:text-dark">در صورت عدم پرداخت، دوره غیرفعال شده و لیست سیاه می‌شوید.</li>
        <li className="hover:marker:text-did hover:text-dark">فرایند غیرفعالسازی خودکار است؛ امکان درخواست مهلت بیشتر وجود ندارد.</li>
        <li className="hover:marker:text-did hover:text-dark">خرید سه قسطی تنها با ارائه چک صیادی قابل انجام است.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">قوانین بازگشت وجه</h2>
      <ul className="list-disc pr-5 space-y-2 text-secondary800 marker:transition-all marker:duration-200 ">
        <li className="hover:marker:text-did hover:text-dark">
          بازگشت وجه تا ۱۰ روز بدون محدودیت امکان‌پذیر است، فقط برای خرید نقدی.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          هزینه اقلام فیزیکی مانند فلش، کتاب و بسته‌بندی از مبلغ بازگشتی کسر می‌شود.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          خریدهای اقساطی یا گروهی شامل بازگشت وجه نمی‌شوند.
        </li>
      </ul>
      <p className="mt-4 text-secondary font-semibold text-base">
        برای درخواست بازگشت وجه، از بخش تیکت پشتیبانی با موضوع «درخواست بازگشت وجه» و اطلاعات: نام و نام خانوادگی، نام محصول، دلیل، شماره شبا پیام ارسال کنید.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4">قوانین تخفیف‌ها</h2>
      <ul className="list-disc pr-5 space-y-2 text-secondary800 marker:transition-all marker:duration-200">
        <li className="hover:marker:text-did hover:text-dark">
          خرید گروهی (۲ نفر یا بیشتر) شامل تخفیف ۱۰٪ است، اما با تخفیف جشنواره همزمان نمی‌شود.
        </li>
        <li className="hover:marker:text-did hover:text-dark">
          دانشجویان با ارائه کارت معتبر، یکبار تا سقف ۱۵٪ تخفیف می‌گیرند.
        </li>
      </ul>
    <div className="flex items-satrt justify-center gap-6 flex-col border-dashed border-t-2 border-t-secondary700 mt-4">
    <p className="mt-4 text-dark text-2xl text-center">
        برای اطلاع از تخفیف‌های فعال می‌توانید به بخش درباره ما مراجعه کنید.
      </p>
      <a href="/about" className="bg-did text-white rounded-2xl px-6 py-2 cursor-pointer mx-auto"> درباره ما</a>
    </div>
    </section>

  </div>
  );
}
