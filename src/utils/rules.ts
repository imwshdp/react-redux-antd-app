import dayjs, { Dayjs } from 'dayjs';

const rules = {
  required: (message: string = 'Обязательное поле') => ({
    required: true,
    message: message
  }),

  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if (!value) {
        return Promise.resolve()
      }
      if (value.isSame(dayjs()) || value.isAfter(dayjs())) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    }
  })
}

export default rules;