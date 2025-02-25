declare namespace CommonType {
  type PageResult<T> = {
    records: T[]
    total: number
  }
}
