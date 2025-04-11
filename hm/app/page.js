"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("treatments");

  const services = [
    {
      name: "علاجات الوجه",
      description: "أحدث تقنيات تجديد البشرة وإشراقتها",
      image: "/images/services/facial-treatment.jpg",
    },
    {
      name: "إزالة الشعر بالليزر",
      description: "تقنيات متطورة لإزالة الشعر بشكل دائم",
      image: "/images/services/laser-hair-removal.jpg",
    },
    {
      name: "حقن البوتوكس والفيلر",
      description: "تقليل التجاعيد واستعادة نضارة البشرة",
      image: "/images/services/botox-fillers.jpg",
    },
    {
      name: "التقشير الكيميائي",
      description: "تحسين ملمس البشرة وتوحيد لونها",
      image: "/images/services/chemical-peel.jpg",
    },
  ];

  const testimonials = [
    {
      name: "سارة",
      text: "غيرت العيادة بشرتي تماماً. أشعر بثقة أكبر من أي وقت مضى!",
      image: "/images/testimonials/testimonial-1.jpg",
    },
    {
      name: "ليلى",
      text: "فريق محترف ونتائج مذهلة. أنصح الجميع بتجربة العيادة!",
      image: "/images/testimonials/testimonial-2.jpg",
    },
    {
      name: "أحمد",
      text: "كانت جلسة البوتوكس سريعة وغير مؤلمة، والنتائج طبيعية جداً.",
      image: "/images/testimonials/testimonial-3.jpg",
    },
  ];

  const experts = [
    {
      name: "د. نور الحكيم",
      specialty: "طبيب تجميل",
      image: "/images/experts/doctor-1.jpg",
    },
    {
      name: "د. سمير العلي",
      specialty: "أخصائي ليزر",
      image: "/images/experts/doctor-2.jpg",
    },
    {
      name: "أ. ياسمين خالد",
      specialty: "أخصائية علاج البشرة",
      image: "/images/experts/doctor-3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-background.jpg"
            alt="Beauty Clinic Hero"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-pink-600 bg-opacity-80 px-4 py-2 rounded">
            جمالك يبدأ هنا
          </h2>
          <p className="text-xl text-white max-w-2xl mb-10 bg-pink-600 bg-opacity-80 px-4 py-2 rounded">
            نقدم لك أحدث تقنيات التجميل وعلاجات البشرة بأيدي خبراء متخصصين
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            احجز موعدًا
          </button>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            خدماتنا المميزة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            نتائج مذهلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/images/before-after/before-after-1.jpg"
                  alt="Before and After"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">علاج حب الشباب</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/images/before-after/before-after-2.jpg"
                  alt="Before and After"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">
                  شد الوجه غير الجراحي
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/images/before-after/before-after-3.jpg"
                  alt="Before and After"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">تجديد البشرة</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "treatments"
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("treatments")}
              >
                العلاجات
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "products"
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("products")}
              >
                المنتجات
              </button>
              <button
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "experts"
                    ? "text-pink-600 border-b-2 border-pink-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("experts")}
              >
                الخبراء
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              {activeTab === "treatments" && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src="/images/tabs/treatments-tab.jpg"
                      alt="Treatments"
                      fill
                      style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      علاجاتنا المتميزة
                    </h3>
                    <p className="text-gray-600 mb-4">
                      نقدم مجموعة واسعة من العلاجات التجميلية المتطورة التي تلبي
                      احتياجاتك الفردية. تم تصميم كل علاج بعناية لتحقيق أفضل
                      النتائج مع مراعاة سلامة وراحة العميل.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        علاجات الوجه التخصصية
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        حقن البوتوكس والفيلر
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        تقنيات شد الوجه غير الجراحية
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "products" && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src="/images/tabs/products-tab.jpg"
                      alt="Products"
                      fill
                      style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      منتجاتنا الحصرية
                    </h3>
                    <p className="text-gray-600 mb-4">
                      نوفر مجموعة مختارة من منتجات العناية بالبشرة عالية الجودة
                      التي تكمل علاجاتنا وتساعدك على الحفاظ على نتائج مثالية في
                      المنزل.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        مستحضرات تنظيف متخصصة
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        سيروم مضاد للشيخوخة
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">✓</span>
                        منتجات حماية من الشمس
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "experts" && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    خبراؤنا المتخصصون
                  </h3>
                  <p className="text-gray-600 mb-6">
                    يضم فريقنا نخبة من أطباء التجميل والمتخصصين ذوي الخبرة
                    العالية والمؤهلات المعتمدة دوليًا.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experts.map((expert, index) => (
                      <div key={index} className="text-center">
                        <div className="relative h-48 w-48 mx-auto mb-4 overflow-hidden rounded-full">
                          <Image
                            src={expert.image}
                            alt={expert.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {expert.name}
                        </h4>
                        <p className="text-pink-600">{expert.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            آراء عملائنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: "cover", borderRadius: "100%" }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Tour */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            جولة في العيادة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64">
              <Image
                src="/images/clinic-tour/clinic-1.avif"
                alt="Clinic Tour"
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/clinic-tour/clinic-2.jpg"
                alt="Clinic Tour"
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/clinic-tour/clinic-3.jpg"
                alt="Clinic Tour"
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/clinic-tour/clinic-4.jpg"
                alt="Clinic Tour"
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pink-600 text-white relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/cta-background.jpg"
            alt="CTA Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-pink-600 bg-opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">
            استعد لتجربة تجميلية فريدة
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            احجز موعدًا اليوم واستمتع بخصم 20% على أول زيارة
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              احجز الآن
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
