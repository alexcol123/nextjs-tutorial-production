'use client'

import { editTaks } from '@/utils/actions'


const EditForm = ({ task }) => {
  const { id, content, completed } = task
  // console.log(task)
  return (
    <form
      action={editTaks}
      className='max-w-sm p-12 border border-base-300 rounded-lg '
    >
      <input type='hidden' name='id' value={id} />
      {/* Content */}
      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='input input-bordered w-full'
      />
      {/* Completed */}
      <div className='form-control my-6'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
          type='checkbox'
          name='completed'
          id='completed'
          defaultChecked={completed}
          className='checkbox checkbox-primary checkbox-sm'
        />
        </label>

      </div>
      <button type="submit" className='btn btn-primary btn-block btn-sm' >edit</button>
    </form>
  )
}

export default EditForm
