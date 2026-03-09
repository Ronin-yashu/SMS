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
        const feeStructure = await prisma.feeStructure.findMany({
            where: {
                schoolId: school.id
            }
        })
        if (!feeStructure) return null
        const academic_years = await prisma.feeStructure.findMany({
            where: {
                schoolId: school.id
            },
            select: {
                academicYear: true,
            },
        })
        return academic_years
    } catch (error) {
        console.log(error, "\n from check fee structure function");
        return null
    }
}