// 'use client'

// import { useEffect, useState } from 'react'
// import { Search, Plus, Calendar, RefreshCw, Filter, Edit, Trash2, ChevronRight, ChevronLeft } from 'lucide-react'

// export default function AppointmentsPage() {
//   const [appointments, setAppointments] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [filter, setFilter] = useState('الكل')

//   useEffect(() => {
//     // بيانات وهمية للمواعيد
//     const fakeAppointments = [
//       { id: 1, patient: 'محمد أحمد', doctor: 'د. سارة', date: '2025-04-10', time: '10:00 ص', status: 'مؤكد' },
//       { id: 2, patient: 'ليلى يوسف', doctor: 'د. أحمد', date: '2025-04-11', time: '12:00 م', status: 'معلق' },
//       { id: 3, patient: 'كريم حسن', doctor: 'د. منى', date: '2025-04-12', time: '02:00 م', status: 'ملغي' },
//       { id: 4, patient: 'فاطمة علي', doctor: 'د. خالد', date: '2025-04-13', time: '09:30 ص', status: 'مؤكد' },
//       { id: 5, patient: 'عمر محمود', doctor: 'د. سارة', date: '2025-04-14', time: '11:15 ص', status: 'معلق' },
//     ]

//     setTimeout(() => {
//       setAppointments(fakeAppointments)
//       setIsLoading(false)
//     }, 300)
//   }, [])

//   const filteredAppointments = filter === 'الكل' 
//     ? appointments 
//     : appointments.filter(appt => appt.status === filter)

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'مؤكد': return 'bg-emerald-100 text-emerald-800 border border-emerald-200'
//       case 'معلق': return 'bg-amber-100 text-amber-800 border border-amber-200'
//       case 'ملغي': return 'bg-rose-100 text-rose-800 border border-rose-200'
//       default: return 'bg-gray-100 text-gray-800 border border-gray-200'
//     }
//   }

//   const refreshData = () => {
//     setIsLoading(true)
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 500)
//   }

//   return (
//     <div className="bg-amber-50 min-h-screen p-6" dir="rtl">
//       <div className="max-w-6xl mx-auto">
//         {/* رأس الصفحة */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//           <div>
//             <h1 className="text-2xl font-bold text-amber-900">إدارة المواعيد</h1>
//             <p className="text-amber-700 mt-1">عرض وإدارة جميع مواعيد العيادة</p>
//           </div>
//           <button className="mt-4 md:mt-0 flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors shadow-md">
//             <Plus size={18} className="ml-2" />
//             <span>إضافة موعد جديد</span>
//           </button>
//         </div>

//         {/* أدوات البحث والتصفية */}
//         <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1 relative">
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <Search size={18} className="text-amber-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="بحث عن موعد أو مريض..."
//                 className="block w-full pr-10 border-amber-200 rounded-lg focus:ring-amber-500 focus:border-amber-500 p-2 bg-amber-50"
//               />
//             </div>
//             <div className="flex gap-2">
//               <div className="relative rounded-lg overflow-hidden">
//                 <select 
//                   className="block w-full appearance-none bg-white border border-amber-200 text-amber-800 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-amber-500 focus:border-amber-500"
//                   onChange={(e) => setFilter(e.target.value)}
//                   value={filter}
//                 >
//                   <option>الكل</option>
//                   <option>مؤكد</option>
//                   <option>معلق</option>
//                   <option>ملغي</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-amber-700">
//                   <Filter size={14} />
//                 </div>
//               </div>
              
//               <button 
//                 className="bg-amber-100 p-2 rounded-lg hover:bg-amber-200 transition-colors"
//                 onClick={refreshData}
//               >
//                 <RefreshCw size={20} className={`text-amber-600 ${isLoading ? 'animate-spin' : ''}`} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* جدول المواعيد */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="overflow-x-auto">
//             {isLoading ? (
//               <div className="text-center py-16">
//                 <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-amber-500 border-t-transparent"></div>
//                 <p className="mt-2 text-amber-600">جاري تحميل البيانات...</p>
//               </div>
//             ) : (
//               <>
//                 <div className="px-4 py-2 border-b border-amber-100 flex items-center justify-between bg-amber-50">
//                   <span className="text-sm text-amber-700 flex items-center">
//                     <Calendar size={16} className="ml-1" />
//                     عرض {filteredAppointments.length} مواعيد
//                   </span>
//                 </div>
//                 <table className="min-w-full text-sm">
//                   <thead className="bg-amber-50 text-amber-800">
//                     <tr className="text-right">
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">#</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">اسم المريض</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">الطبيب</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">التاريخ</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">الوقت</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">الحالة</th>
//                       <th className="px-4 py-3 font-medium border-b border-amber-100">الإجراءات</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-amber-100">
//                     {filteredAppointments.length > 0 ? (
//                       filteredAppointments.map((appt, index) => (
//                         <tr key={appt.id} className={`hover:bg-amber-50 text-right ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}`}>
//                           <td className="px-4 py-3 text-amber-500 font-mono">{appt.id}</td>
//                           <td className="px-4 py-3 font-medium text-amber-900">{appt.patient}</td>
//                           <td className="px-4 py-3 text-amber-700">{appt.doctor}</td>
//                           <td className="px-4 py-3 text-amber-700">{appt.date}</td>
//                           <td className="px-4 py-3 text-amber-700">{appt.time}</td>
//                           <td className="px-4 py-3">
//                             <span className={`inline-flex text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(appt.status)}`}>
//                               {appt.status}
//                             </span>
//                           </td>
//                           <td className="px-4 py-3">
//                             <div className="flex gap-2 justify-end">
//                               <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
//                                 <Edit size={14} className="ml-1" />
//                                 تعديل
//                               </button>
//                               <span className="text-amber-200">|</span>
//                               <button className="text-rose-600 hover:text-rose-800 font-medium flex items-center">
//                                 <Trash2 size={14} className="ml-1" />
//                                 حذف
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={7} className="px-4 py-12 text-center text-amber-600">
//                           <div className="flex flex-col items-center">
//                             <Calendar size={32} className="mb-2 text-amber-400" />
//                             لا توجد مواعيد متطابقة مع معايير البحث
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </>
//             )}
//           </div>
          
//           {/* ترقيم الصفحات */}
//           <div className="px-4 py-3 border-t border-amber-100 flex items-center justify-between bg-amber-50">
//             <div className="text-sm text-amber-700">
//               عرض <span className="font-medium">{filteredAppointments.length}</span> من إجمالي <span className="font-medium">{appointments.length}</span> مواعيد
//             </div>
//             <div className="flex gap-1">
//               <button className="px-3 py-1 border border-amber-300 rounded-md bg-white text-amber-700 hover:bg-amber-50 flex items-center">
//                 <ChevronRight size={16} className="ml-1" />
//                 السابق
//               </button>
//               <button className="px-3 py-1 border border-amber-500 rounded-md bg-amber-500 text-white">1</button>
//               <button className="px-3 py-1 border border-amber-300 rounded-md bg-white text-amber-700 hover:bg-amber-50 flex items-center">
//                 التالي
//                 <ChevronLeft size={16} className="mr-1" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// 'use client'

// import { useEffect, useState } from 'react'
// import Link from 'next/link'

// export default function AppointmentsPage() {
//   const [appointments, setAppointments] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await fetch('/api/appointments')
//         const data = await res.json()
//         setAppointments(data)
//       } catch (err) {
//         console.error('❌ فشل في تحميل المواعيد:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchAppointments()
//   }, [])

//   return (
//     <div className="p-6 bg-amber-50 min-h-screen" dir="rtl">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-amber-900">إدارة المواعيد</h1>
//           <Link href="/admin-dashboard/appointments/new">
//             <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg shadow-md transition">
//               + إضافة موعد جديد
//             </button>
//           </Link>
//         </div>

//         {loading ? (
//           <div className="text-center text-amber-700">جاري تحميل المواعيد...</div>
//         ) : appointments.length === 0 ? (
//           <div className="text-center text-amber-700">لا توجد مواعيد حالياً</div>
//         ) : (
//           <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//             <table className="min-w-full divide-y divide-amber-200">
//               <thead className="bg-amber-100 text-amber-900 text-xs uppercase">
//                 <tr>
//                   <th className="px-6 py-3 text-right">المريض</th>
//                   <th className="px-6 py-3 text-right">الطبيب</th>
//                   <th className="px-6 py-3 text-right">التاريخ</th>
//                   <th className="px-6 py-3 text-right">الوقت</th>
//                   <th className="px-6 py-3 text-right">الحالة</th>
//                   <th className="px-6 py-3 text-right">إجراءات</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-amber-100">
//                 {appointments.map((appointment) => (
//                   <tr key={appointment._id}>
//                     <td className="px-6 py-4 text-sm text-amber-900">{appointment?.patient?.name}</td>
//                     <td className="px-6 py-4 text-sm text-amber-900">{appointment?.doctor?.name}</td>
//                     <td className="px-6 py-4 text-sm text-amber-800">{new Date(appointment.date).toLocaleDateString()}</td>
//                     <td className="px-6 py-4 text-sm text-amber-800">{appointment.time}</td>
//                     <td className="px-6 py-4 text-sm">
//                       <span className="px-2 py-1 text-xs bg-amber-100 rounded-full text-amber-800">
//                         {appointment.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-sm ">
//                       <div className="flex space-x-2 space-x-reverse gap-5">
//                         <Link href={`/admin-dashboard/appointments/view/${appointment._id}`}>
//                           <button className="text-blue-600 hover:text-blue-800">عرض</button>
//                         </Link>
//                         <Link href={`/admin-dashboard/appointments/edit/${appointment._id}`}>
//                           <button className="text-amber-600 hover:text-amber-800">تعديل</button>
//                         </Link>
//                         <button
//                           onClick={async () => {
//                             if (confirm('هل تريد حذف هذا الموعد؟')) {
//                               try {
//                                 const res = await fetch(`/api/appointments/${appointment._id}`, { method: 'DELETE' })
//                                 if (res.ok) {
//                                   setAppointments(prev => prev.filter(a => a._id !== appointment._id))
//                                 } else {
//                                   alert('❌ فشل في حذف الموعد')
//                                 }
//                               } catch (error) {
//                                 console.error('❌ فشل الحذف:', error)
//                               }
//                             }
//                           }}
//                           className="text-red-600 hover:text-red-800"
//                         >
//                           حذف
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error("❌ فشل في تحميل المواعيد:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6 bg-pink-50 min-h-screen" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">إدارة المواعيد</h1>
          <Link href="/admin-dashboard/appointments/new">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200 flex items-center">
              <span className="mr-1">+</span> إضافة موعد جديد
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg">لا توجد مواعيد حالياً</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-800 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-right">المريض</th>
                  <th className="px-6 py-3 text-right">الطبيب</th>
                  <th className="px-6 py-3 text-right">التاريخ</th>
                  <th className="px-6 py-3 text-right">الوقت</th>
                  <th className="px-6 py-3 text-right">الحالة</th>
                  <th className="px-6 py-3 text-right">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {appointment?.patient?.name || "غير محدد"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {appointment?.doctor?.name || "غير محدد"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(appointment.date).toLocaleDateString("ar-SA")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-pink-100 rounded-full text-pink-800">
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      <div className="flex space-x-2 space-x-reverse gap-5">
                        <Link
                          href={`/admin-dashboard/appointments/view/${appointment._id}`}
                        >
                          <button className="text-blue-600 hover:text-blue-800">
                            عرض
                          </button>
                        </Link>
                        <Link
                          href={`/admin-dashboard/appointments/edit/${appointment._id}`}
                        >
                          <button className="text-pink-600 hover:text-pink-700">
                            تعديل
                          </button>
                        </Link>
                        <button
                          onClick={async () => {
                            if (confirm("هل تريد حذف هذا الموعد؟")) {
                              try {
                                const res = await fetch(
                                  `/api/appointments/${appointment._id}`,
                                  {
                                    method: "DELETE",
                                  }
                                );
                                if (res.ok) {
                                  setAppointments((prev) =>
                                    prev.filter(
                                      (a) => a._id !== appointment._id
                                    )
                                  );
                                } else {
                                  alert("❌ فشل في حذف الموعد");
                                }
                              } catch (error) {
                                console.error("❌ فشل الحذف:", error);
                              }
                            }
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && appointments.length > 0 && (
          <div className="mt-4 text-center text-sm text-gray-600">
            إجمالي عدد المواعيد: {appointments.length}
          </div>
        )}
      </div>
    </div>
  );
}