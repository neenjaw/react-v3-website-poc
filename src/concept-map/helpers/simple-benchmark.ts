export const wrapBenchmark = (
  fn: (...args: any[]) => any,
  label?: string
): ((...args: any[]) => any) => {
  return (...args) => {
    const start = Date.now()
    const result = fn.apply(null, args)
    const end = Date.now()
    console.info(`📈 BENCHMARK${label ? ` ${label}` : ''} ${end - start}ms`)
    return result
  }
}
