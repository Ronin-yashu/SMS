"use server"
import { prisma } from '@/lib/prisma';
export default async function GetAcademicYears(username) {
    try {
        const school = await prisma.school.findFirst({
            where: {
                adminEmail: {
                    contains: `${username}@`
                }
            }
        });
        if (!school) return null
        const academicYears = await prisma.feeStructure.findMany({
            where: {
                schoolId: school.id
            },
            select: {
                academicYear: true,
            },
        })
        if (!academicYears || academicYears.length == 0) return null
        const academic_years = [...new Set(
            feeStructure.map(f => f.academicYears)
        )]

        return academic_years
    } catch (error) {
        console.log(error, "\n from check fee structure function");
        return null
    }
}