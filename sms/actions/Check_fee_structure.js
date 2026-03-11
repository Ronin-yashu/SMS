"use server"
import { prisma } from '@/lib/prisma';

export default async function Check_fee_structure(username) {
    try {
        const school = await prisma.school.findFirst({
            where: {
                adminEmail: {
                    startsWith: `${username}@`
                }
            }
        });
        if (!school) return null

        const feeStructure = await prisma.feeStructure.findMany({
            where: { schoolId: school.id },
            orderBy: { academicYear: 'desc' },
        })
        if (!feeStructure) return null
        return feeStructure
    } catch (error) {
        console.log(error, "\n from check fee structure function");
        return null
    }
}
