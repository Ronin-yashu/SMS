"use server"
import { prisma } from '@/lib/prisma';

export default async function GetAcademicYears(username) {
    try {
        const academicYears = await prisma.feeStructure.findMany({
            where: {
                school: {
                    adminEmail: { startsWith: `${username}@` }
                }
            },
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
