// import { connectDB } from '../../lib/db'
// import Doctor from '../../models/Doctor'

// export async function GET() {
//   try {
//     await connectDB()
//     const doctors = await Doctor.find().sort({ createdAt: -1 })
//     return Response.json(doctors)
//   } catch (err) {
//     return Response.json({ error: err.message }, { status: 500 })
//   }
// }

// export async function POST(req) {
//   try {
//     await connectDB()
//     const body = await req.json()
//     const doctor = await Doctor.create(body)
//     return Response.json({ success: true, doctor })
//   } catch (err) {
//     return Response.json({ error: err.message }, { status: 500 })
//   }
// }
// pages/api/doctors/index.js
import { connectDB } from '../../lib/db';
import Doctor from '../../models/Doctor';

export async function GET(req) {
  try {
    await connectDB();

    // استخراج معلمات الاستعلام
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get('q') || '';
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 5;

    // بناء استعلام البحث
    const query = {
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { specialty: { $regex: searchQuery, $options: 'i' } },
      ],
    };

    // حساب العدد الإجمالي للأطباء المطابقين
    const totalDoctors = await Doctor.countDocuments(query);

    // جلب الأطباء مع الـ Pagination
    const doctors = await Doctor.find(query)
      .sort({ createdAt: -1 }) // ترتيب تنازلي حسب تاريخ الإنشاء
      .skip((page - 1) * limit)
      .limit(limit);

    return Response.json({
      doctors,
      totalDoctors,
      totalPages: Math.ceil(totalDoctors / limit),
      currentPage: page,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const doctor = await Doctor.create(body);
    return Response.json({ success: true, doctor });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}