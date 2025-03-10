const getImageUrl = (image: string) => {
  return `${import.meta.env.VITE_API_BASE_URL}/images/${image}`
}

export { getImageUrl }
