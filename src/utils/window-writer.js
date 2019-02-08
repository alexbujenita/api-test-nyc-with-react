function alertSpam() {
  alert('BOO HOO HOO ;((')
  for (let i = 10; i < 150; i+=2) {
    document.write(`<h2 style="font-size:${i}; color:${(function () {
      const num = Math.round(0xffffff * Math.random());
      const r = num >> 16;
      const g = (num >> 8) & 255;
      const b = num & 255;
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    })()}">!!!NOW YOU'VE DONE IT!!!</h2>`);
  }
}

export { alertSpam }
