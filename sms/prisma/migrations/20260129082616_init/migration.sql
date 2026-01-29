-- CreateTable
CREATE TABLE "school" (
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "school_schoolCode_key" ON "school"("schoolCode");

-- CreateIndex
CREATE UNIQUE INDEX "school_officialEmail_key" ON "school"("officialEmail");

-- CreateIndex
CREATE UNIQUE INDEX "school_mobileNumber_key" ON "school"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "school_adminEmail_key" ON "school"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "school_adminMobile_key" ON "school"("adminMobile");
