const fs = required('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++) {
  file.write('Hello, my name is Myo Min Khant\n');
}

file.end();