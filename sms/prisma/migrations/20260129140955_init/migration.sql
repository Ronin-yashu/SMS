-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "schoolType" TEXT NOT NULL,
    "establishmentYear" TEXT NOT NULL,
    "schoolCode" TEXT NOT NULL,
    "udiseCode" TEXT,
    "schoolCategory" TEXT NOT NULL,
    "officialEmail" TEXT NOT NULL,
    "landlineNumber" TEXT,
    "mobileNumber" TEXT NOT NULL,
    "alternativeMobile" TEXT,
    "website" TEXT,
    "schoolAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "adminDesignation" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "adminPassword" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "adminMobile" TEXT NOT NULL,
    "studentStrength" TEXT NOT NULL,
    "teachingStaff" TEXT NOT NULL,
    "nonTeachingStaff" TEXT NOT NULL,
    "totalClasses" TEXT NOT NULL,
    "mediumOfInstruction" TEXT[],
    "streamsOffered" TEXT[],
    "plan" TEXT NOT NULL,
    "billingCycle" TEXT NOT NULL,
    "termsAccepted" BOOLEAN NOT NULL,
    "privacyAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_schoolCode_key" ON "School"("schoolCode");

-- CreateIndex
CREATE UNIQUE INDEX "School_officialEmail_key" ON "School"("officialEmail");

-- CreateIndex
CREATE UNIQUE INDEX "School_mobileNumber_key" ON "School"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "School_adminEmail_key" ON "School"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "School_adminMobile_key" ON "School"("adminMobile");
