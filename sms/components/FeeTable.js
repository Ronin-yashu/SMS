import { Select, Button } from '@radix-ui/themes'
import React from 'react'
const FeeTable = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-red-300'>
      <header className='bg-green-500 w-full h-full flex justify-between px-10 items-center'>
        <div className='flex justify-center items-center gap-5'>
          <div>
            <span>Academic year : </span>
          </div>
          <div>
            <Select.Root defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value="orange">Orange</Select.Item>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item value="grape" disabled>
                    Grape
                  </Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value="carrot">Carrot</Select.Item>
                  <Select.Item value="potato">Potato</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <Button>hy</Button>
          <Button>hy</Button>
          <Button>hy</Button>
        </div>
      </header>
    </div>
  )
}

export default FeeTable
