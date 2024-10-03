type Props = {
  statusCode: number
  message: string
  data?: null | any
}

const responseFormat = ({ message, statusCode, data }: Props) => {
  return {
    status: statusCode,
    message,
    data,
  }
}

export { responseFormat }
