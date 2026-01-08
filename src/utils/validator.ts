export const validator = {
  email: [
    (value: string) => /.+@.+\..+/.test(value) || 'Неккоректный Email-адрес'
  ],
  username: [
    (value: string) => value.length >= 3 || 'Имя должно быть не короче 3 символов',
    (value: string) => !/\s/.test(value) || 'Имя не должно содержать пробелы'
  ],
  password: [
    (value: string) => !!value || 'Введите пароль',
    (value: string) => value.length >= 8 || 'Длина пароля не менее 8 символов',
    (value: string) => /(?=.*[a-zа-яё])/.test(value) || 'Хотя бы одна строчная буква',
    (value: string) => /(?=.*[A-ZА-ЯЁ])/.test(value) || 'Хотя бы одна заглавная буква',
    (value: string) => /(?=.*\d)/.test(value) || 'Хотя бы одна цифра',
    (value: string) => /(?=.*[^\w\s])/.test(value) || 'Хотя бы один спецсимвол',
    (value: string) => !/\s/.test(value) || 'Пароль не должен содержать пробелы'
  ]
}