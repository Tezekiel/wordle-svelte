export const setBlockGame = (block: boolean) => {
  localStorage.setItem('block', String(block))
}

export const getBlockGame = () => {
  const blocked = localStorage.getItem('block')
  if (blocked) {
    return blocked === 'true'
  } else {
    setBlockGame(false)
    return false
  }
}
