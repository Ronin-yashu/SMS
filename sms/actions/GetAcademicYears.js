"use server"
import { prisma } from '@/lib/prisma';
export default async function GetAcademicYears(username) {
    try {
        const school = await prisma.school.findFirst({
            where: {
                adminEmail: {
                    startsWith: `${username}@`
                }
            }
        });
        if (!school) return null;

        const academicYears = await prisma.feeStructure.findMany({
            where: { schoolId: school.id },
            select: { academicYear: true },
            distinct: ['academicYear'],
            orderBy: { academicYear: 'desc' }
        });

        if (!academicYears || academicYears.length === 0) return null;
        return academicYears.map(f => f.academicYear);

    } catch (error) {
        console.log(error, "\n from GetAcademicYears");
        return null;
    }
}
