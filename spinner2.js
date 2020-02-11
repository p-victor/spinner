const spin = function (spinCount) {
  const spinner = ['|', '/', '-', '\\']
  // const initialDelay = 100;
  const step = 200;
  let time = 100; //initial time wait
  for (let spinNum = 0; spinNum < spinCount; spinNum++) {
    for (let spinIndex in spinner) {
      setTimeout(() => {
        // console.log(time)
        process.stdout.write(`\r${spinner[spinIndex]}   `);
      }, time);
      time += step;
    }
  }
  setTimeout(() => process.stdout.write('\n') , time + step);

}
spin(3);
