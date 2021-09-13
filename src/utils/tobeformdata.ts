export const toBeFormData = (data: any, index: number) => {
  const formData = new FormData()
  const dataArr: string[] = Object.keys(data)
  for (let i = 0; i < index; i++) {
    formData.append(dataArr[i], data[dataArr[i]])
    console.log(`${dataArr[i]}:${data[dataArr[i]]}`)
  }
  return formData
}
