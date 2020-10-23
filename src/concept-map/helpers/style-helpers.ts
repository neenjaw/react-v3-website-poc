const getComputedRootStyle = () => getComputedStyle(document.documentElement)

export const getLineWidth = () => {
  const rootStyle = getComputedRootStyle()
  return Number(rootStyle.getPropertyValue('--c-concept-map-line-width'))
}

export const getCircleRadius = () => {
  const rootStyle = getComputedRootStyle()
  return Number(rootStyle.getPropertyValue('--c-concept-map-circle-radius'))
}
