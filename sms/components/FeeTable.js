"use client"
import React from 'react'
import { Select, Button, Table } from '@radix-ui/themes'
import { Zap, Plus, FileAxis3d } from 'lucide-react'
const FeeTable =  ({ data, academic_years }) => {
  const [selectedYear, setSelectedYear] = React.useState(academic_years?.[0] || '');
  return (
    <div className='flex flex-col justify-center w-full h-full p-6 space-y-6 items-center '>
      <header className='bg-white border-b border-gray-100 rounded-2xl shadow-md w-full h-3/20 flex justify-between px-10 items-center'>
        <div className='flex justify-center items-center gap-5'>
          <span className='font-bold'>Academic year : </span>
          <div>
            <Select.Root value={selectedYear} onValueChange={(val) => setSelectedYear(val)}>
              <Select.Trigger />
              <Select.Content>
                {academic_years.map(item => (
                  <Select.Item key={item} value={item}>{item}</Select.Item>
                ))}
              </Select.Content>
            </Select.Root>

          </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <Button variant='soft'>
            <FileAxis3d size={18} className='mr-2' />
            Copy Year
          </Button>
          <Button variant='outline'>
            <Zap size={18} className='mr-2' />
            Quick Setup
          </Button>
          <Button >
            <Plus size={18} className='mr-2' />
            Add Fee Structure
          </Button>
        </div>
      </header>
      <div className='w-full h-85/100 '>
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
            {data.map(data => (
              <Table.Row key={data.id}>
                <Table.RowHeaderCell>{data.class}</Table.RowHeaderCell>
                <Table.Cell>{"₹" + data.tuitionFeeMonthly}</Table.Cell>
                <Table.Cell>{"₹" + data.transportFeeMonthly}</Table.Cell>
                <Table.Cell>{"₹" + data.examFeeYearly}</Table.Cell>
                <Table.Cell>{"₹" + data.admissionFee}</Table.Cell>
                <Table.Cell>{"₹" + data.idCardFee}</Table.Cell>
                <Table.Cell>{"₹" + data.booksFee}</Table.Cell>
                <Table.Cell>{"₹" + data.activityFee}</Table.Cell>
              </Table.Row>
            ))}

          </Table.Body>
        </Table.Root>

      </div>
    </div>
  )
}

export default FeeTable
