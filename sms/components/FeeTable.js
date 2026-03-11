"use client"
import React from 'react'
import { Select, Button, Table } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d } from 'lucide-react'

const FeeTable = ({ data, academic_years }) => {
  const [selectedYear, setSelectedYear] = React.useState(academic_years?.[0] || '');

  const filteredData = data.filter(item => item.academicYear === selectedYear);

  return (
    <div className='flex flex-col w-full h-full p-3 sm:p-6 space-y-4 sm:space-y-6'>

      <header className='bg-white border-b border-gray-100 rounded-2xl shadow-md w-full flex flex-col sm:flex-row justify-between px-4 sm:px-8 py-4 gap-4 items-start sm:items-center'>

        <div className='flex items-center gap-3'>
          <span className='font-bold text-sm sm:text-base whitespace-nowrap'>Academic year:</span>
          <Select.Root value={selectedYear} onValueChange={(val) => setSelectedYear(val)}>
            <Select.Trigger />
            <Select.Content>
              {academic_years.map(item => (
                <Select.Item key={item} value={item}>{item}</Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>

        <div className='flex flex-wrap gap-2'>
          <Button variant='soft' size="2">
            <FileAxis3d size={16} />
            <span className='ml-1'>Copy Year</span>
          </Button>
          <Button variant='outline' size="2">
            <Zap size={16} />
            <span className='ml-1'>Quick Setup</span>
          </Button>
          <Button size="2">
            <Plus size={16} />
            <span className='ml-1'>Add Fee Structure</span>
          </Button>
        </div>
      </header>

      <div className='w-full overflow-x-auto rounded-xl'>
        {filteredData.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 text-gray-400 gap-2'>
            <span className='text-4xl'>🚫</span>
            <span className='text-sm'>No fee structure found for {selectedYear}</span>
          </div>
        ) : (
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Class</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Tuition/mo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Transport/mo</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Exam/yr</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Admission</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Id Card</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Books</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Activity</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filteredData.map(item => (
                <Table.Row key={item.id}>
                  <Table.RowHeaderCell>{item.class}</Table.RowHeaderCell>
                  <Table.Cell>{"₹" + item.tuitionFeeMonthly}</Table.Cell>
                  <Table.Cell>{"₹" + item.transportFeeMonthly}</Table.Cell>
                  <Table.Cell>{"₹" + item.examFeeYearly}</Table.Cell>
                  <Table.Cell>{"₹" + item.admissionFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.idCardFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.booksFee}</Table.Cell>
                  <Table.Cell>{"₹" + item.activityFee}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </div>

    </div>
  )
}

export default FeeTable
