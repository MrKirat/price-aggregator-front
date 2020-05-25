const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onload = function () {
      resolve(reader.result);
    };
  });
}

export { getBase64 };