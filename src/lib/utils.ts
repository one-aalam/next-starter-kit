import { useState } from 'react'

export function useFormFields<T>(initialValues: T): [T, (event: React.ChangeEvent<HTMLInputElement>) => void] {
    const [values, setValues] = useState<T>(initialValues)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      const { target } = event;
      const { name, value } = target;
      setValues({ ...values, [name]: value })
    }
    return [ values, handleChange]
  }