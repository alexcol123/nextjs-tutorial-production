import EditForm from '@/app/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id)

  return (
    <div className=''>
      <Link href='/tasks' className='btn btn-accent mb-16'>
        Back to tasks
      </Link>

      <EditForm task={task} />
    </div>
  )
}

export default SingleTaskPage
