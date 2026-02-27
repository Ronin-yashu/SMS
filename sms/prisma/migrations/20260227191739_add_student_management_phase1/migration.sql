-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "admissionNumber" TEXT NOT NULL,
    "qrCodeValue" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "bloodGroup" TEXT,
    "aadharNumber" TEXT,
    "photoUrl" TEXT,
    "parentPrimaryMobile" TEXT NOT NULL,
    "parentAlternateMobile" TEXT,
    "parentEmail" TEXT,
    "emergencyContactName" TEXT,
    "emergencyContactPhone" TEXT,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "admissionDate" TIMESTAMP(3) NOT NULL,
    "previousSchoolId" TEXT,
    "usesTransport" BOOLEAN NOT NULL DEFAULT false,
    "transportRouteId" TEXT,
    "pickupPoint" TEXT,
    "dropPoint" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentAcademicHistory" (
    "id" TEXT NOT NULL,
    "academicYear" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "rollNumber" INTEGER NOT NULL,
    "classTeacher" TEXT,
    "promotionStatus" TEXT NOT NULL DEFAULT 'NA',
    "attendancePresent" INTEGER NOT NULL DEFAULT 0,
    "attendanceAbsent" INTEGER NOT NULL DEFAULT 0,
    "finalGrade" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "StudentAcademicHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "fatherOccupation" TEXT,
    "fatherMobile" TEXT NOT NULL,
    "fatherEmail" TEXT,
    "fatherAadhar" TEXT,
    "motherName" TEXT NOT NULL,
    "motherOccupation" TEXT,
    "motherMobile" TEXT NOT NULL,
    "motherEmail" TEXT,
    "motherAadhar" TEXT,
    "guardianName" TEXT,
    "guardianRelation" TEXT,
    "guardianMobile" TEXT,
    "guardianEmail" TEXT,
    "primaryContact" TEXT NOT NULL DEFAULT 'Father',
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "verificationStatus" TEXT NOT NULL DEFAULT 'Pending',
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "rejectionReason" TEXT,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeeStructure" (
    "id" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "academicYear" TEXT NOT NULL,
    "tuitionFeeMonthly" INTEGER NOT NULL,
    "transportFeeMonthly" INTEGER NOT NULL DEFAULT 0,
    "examFeeYearly" INTEGER NOT NULL DEFAULT 0,
    "admissionFee" INTEGER NOT NULL DEFAULT 0,
    "booksFee" INTEGER NOT NULL DEFAULT 0,
    "idCardFee" INTEGER NOT NULL DEFAULT 0,
    "activityFee" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "FeeStructure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentFee" (
    "id" TEXT NOT NULL,
    "academicYear" TEXT NOT NULL,
    "tuitionFee" INTEGER NOT NULL,
    "transportFee" INTEGER NOT NULL DEFAULT 0,
    "examFee" INTEGER NOT NULL DEFAULT 0,
    "admissionFee" INTEGER NOT NULL DEFAULT 0,
    "otherFees" INTEGER NOT NULL DEFAULT 0,
    "discountPercentage" INTEGER NOT NULL DEFAULT 0,
    "discountAmount" INTEGER NOT NULL DEFAULT 0,
    "specialCharges" INTEGER NOT NULL DEFAULT 0,
    "totalFee" INTEGER NOT NULL,
    "totalPayable" INTEGER NOT NULL,
    "totalPaid" INTEGER NOT NULL DEFAULT 0,
    "totalPending" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT NOT NULL,

    CONSTRAINT "StudentFee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeeInstallment" (
    "id" TEXT NOT NULL,
    "installmentNumber" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "amountDue" INTEGER NOT NULL,
    "amountPaid" INTEGER NOT NULL DEFAULT 0,
    "lateFee" INTEGER NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentFeeId" TEXT NOT NULL,

    CONSTRAINT "FeeInstallment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeePayment" (
    "id" TEXT NOT NULL,
    "amountPaid" INTEGER NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentMethod" TEXT NOT NULL,
    "transactionId" TEXT,
    "receiptNumber" TEXT NOT NULL,
    "paymentFor" TEXT NOT NULL,
    "remarks" TEXT,
    "paidBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" TEXT NOT NULL,
    "installmentId" TEXT,

    CONSTRAINT "FeePayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "routeName" TEXT NOT NULL,
    "stops" TEXT[],
    "vehicleNumber" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "driverMobile" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 40,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "schoolId" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_admissionNumber_key" ON "Student"("admissionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_qrCodeValue_key" ON "Student"("qrCodeValue");

-- CreateIndex
CREATE INDEX "Student_schoolId_status_idx" ON "Student"("schoolId", "status");

-- CreateIndex
CREATE INDEX "Student_admissionNumber_idx" ON "Student"("admissionNumber");

-- CreateIndex
CREATE INDEX "Student_qrCodeValue_idx" ON "Student"("qrCodeValue");

-- CreateIndex
CREATE INDEX "Student_aadharNumber_idx" ON "Student"("aadharNumber");

-- CreateIndex
CREATE INDEX "Student_parentId_idx" ON "Student"("parentId");

-- CreateIndex
CREATE INDEX "StudentAcademicHistory_studentId_academicYear_idx" ON "StudentAcademicHistory"("studentId", "academicYear");

-- CreateIndex
CREATE INDEX "StudentAcademicHistory_academicYear_class_section_idx" ON "StudentAcademicHistory"("academicYear", "class", "section");

-- CreateIndex
CREATE UNIQUE INDEX "StudentAcademicHistory_studentId_academicYear_key" ON "StudentAcademicHistory"("studentId", "academicYear");

-- CreateIndex
CREATE INDEX "Parent_fatherMobile_idx" ON "Parent"("fatherMobile");

-- CreateIndex
CREATE INDEX "Parent_motherMobile_idx" ON "Parent"("motherMobile");

-- CreateIndex
CREATE INDEX "Parent_guardianMobile_idx" ON "Parent"("guardianMobile");

-- CreateIndex
CREATE INDEX "Parent_fatherEmail_idx" ON "Parent"("fatherEmail");

-- CreateIndex
CREATE INDEX "Parent_schoolId_idx" ON "Parent"("schoolId");

-- CreateIndex
CREATE INDEX "Document_studentId_documentType_idx" ON "Document"("studentId", "documentType");

-- CreateIndex
CREATE INDEX "Document_verificationStatus_idx" ON "Document"("verificationStatus");

-- CreateIndex
CREATE INDEX "FeeStructure_schoolId_academicYear_idx" ON "FeeStructure"("schoolId", "academicYear");

-- CreateIndex
CREATE UNIQUE INDEX "FeeStructure_schoolId_class_academicYear_key" ON "FeeStructure"("schoolId", "class", "academicYear");

-- CreateIndex
CREATE INDEX "StudentFee_studentId_academicYear_idx" ON "StudentFee"("studentId", "academicYear");

-- CreateIndex
CREATE UNIQUE INDEX "StudentFee_studentId_academicYear_key" ON "StudentFee"("studentId", "academicYear");

-- CreateIndex
CREATE INDEX "FeeInstallment_studentFeeId_idx" ON "FeeInstallment"("studentFeeId");

-- CreateIndex
CREATE INDEX "FeeInstallment_dueDate_status_idx" ON "FeeInstallment"("dueDate", "status");

-- CreateIndex
CREATE INDEX "FeeInstallment_status_idx" ON "FeeInstallment"("status");

-- CreateIndex
CREATE UNIQUE INDEX "FeePayment_receiptNumber_key" ON "FeePayment"("receiptNumber");

-- CreateIndex
CREATE INDEX "FeePayment_studentId_idx" ON "FeePayment"("studentId");

-- CreateIndex
CREATE INDEX "FeePayment_receiptNumber_idx" ON "FeePayment"("receiptNumber");

-- CreateIndex
CREATE INDEX "FeePayment_paymentDate_idx" ON "FeePayment"("paymentDate");

-- CreateIndex
CREATE INDEX "Route_schoolId_isActive_idx" ON "Route"("schoolId", "isActive");

-- CreateIndex
CREATE INDEX "School_schoolCode_idx" ON "School"("schoolCode");

-- CreateIndex
CREATE INDEX "School_adminEmail_idx" ON "School"("adminEmail");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_transportRouteId_fkey" FOREIGN KEY ("transportRouteId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentAcademicHistory" ADD CONSTRAINT "StudentAcademicHistory_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeeStructure" ADD CONSTRAINT "FeeStructure_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentFee" ADD CONSTRAINT "StudentFee_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeeInstallment" ADD CONSTRAINT "FeeInstallment_studentFeeId_fkey" FOREIGN KEY ("studentFeeId") REFERENCES "StudentFee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeePayment" ADD CONSTRAINT "FeePayment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeePayment" ADD CONSTRAINT "FeePayment_installmentId_fkey" FOREIGN KEY ("installmentId") REFERENCES "FeeInstallment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE CASCADE ON UPDATE CASCADE;
