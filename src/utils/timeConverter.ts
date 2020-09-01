const convertToMMSS = (secs: number) => {
  const minutes = Math.floor(secs / 60) % 60
  const seconds = Math.floor(secs % 60);

  return [minutes,seconds]
    .map(v => v < 10 ? "0" + v : v)
    .join(":")

}

export default convertToMMSS;
